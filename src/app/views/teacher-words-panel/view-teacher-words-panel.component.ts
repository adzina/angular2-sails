import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { SidePanelLessonsComponent } from '../../bars/side-panel-lessons/side-panel-lessons.component';
import {Http} from '@angular/http';

@Component({
  selector: 'teacher-words-panel',
  templateUrl: 'view-teacher-words-panel.component.html',
})

export class TeacherWordsPanelComponent {
  polish: string;
  english: string;
  lessons: word[];
  lessonsFiltered: word[];
  lessonsUnique: string[];
  chosenLesson: string;
  constructor(private _loginService: LoginService,
              private http: Http) {
    //-----------------------------------------------------------------------------
    this.lessons = [{ eng: "one", pol: "jeden", id: "1", lesson: "words1" }, { eng: "two", pol: "dwa", id: "2", lesson: "words1" }, { eng: "three", pol: "trzy", id: "3", lesson: "words1" }, { eng: "cat", pol: "kot", id: "4", lesson: "words2" }, { eng: "dog", pol: "pies", id: "5", lesson: "words2" }];
    this.chosenLesson = null;
    this.lessonsUnique=[];
    this.onlyUniqueLessons();
    //------------------------------------------------------------------------------
  }

  handleLessonChosen(x:string){
    this.chosenLesson=x;
    //--------------------------------------------------------------------------------
    //pobierz z bazy danych tylko slowka z danej lekcji
    this.lessonsFiltered=this.lessons.filter((l:word) => l.lesson===this.chosenLesson);
    //------------------------------------------------------------------------------------
    /*
      GET words
      findAll
      in: id lekcji
      out: [words]
    */
  }
  onlyUniqueLessons(){

    this.lessonsUnique[0]=this.lessons[0].lesson;
    var uniqueIndex=0;
    for(var i=1;i<this.lessons.length;i++){
      if(this.lessons[i].lesson!=this.lessonsUnique[uniqueIndex]){
        uniqueIndex++;
        this.lessonsUnique[uniqueIndex]=this.lessons[i].lesson;
      }
    }

  }
  delete(i:number){
    this.lessonsFiltered.splice(i,1);
  }
  submit() {
    var string='http://localhost:1337/word';
    var body=JSON.stringify({polish:this.polish,english:this.english});
    //-------------------------------------------------------------------------------
    this.http.post(string,body)
    .map(res=>res.json())
    .subscribe(
      response => {
        this.polish = "";
        this.english = "";
        this.addToLesson(response.id);
      },
      error => {
        console.log(error.text());
      }
    );

    var n={pol:this.polish,eng:this.english,lesson:this.chosenLesson,id:""};

    this.lessonsFiltered.push({pol:this.polish,eng:this.english,lesson:this.chosenLesson,id:""});

  }
  addToLesson(wID:string){
      var string='http://localhost:1337/lessonWord';
      var lID=this.getLessonID();
      var body=JSON.stringify({lessonID:lID,wordID:wID});

      this.http.post(string,body).subscribe(response=>{alert('added to lesson');})

  }
  getLessonID(){
    var string='http://localhost:1337/lesson';
    var body=JSON.stringify({subject:this.chosenLesson});
    var lessonID:string;
    this.http.get(string,body)
    .map(res=>res.json())
    .subscribe(response=>{
      //===================
      alert(response.id);
      //========================
      lessonID=response.id;
    });
    return lessonID;
  }
}

interface word {
  eng: string;
  pol: string;
  lesson: string;
  id: string;
}
