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
  chosenLessonID: string;
  chosenLessonName: string;
  buttonClass: string;
  constructor(private _loginService: LoginService,
              private http: Http) {
    this.chosenLessonID = null;
    this.lessonsUnique=[];
    this.buttonClass="btn btn-success disabled";

  }

  handleLessonChosen(x:string){
    this.chosenLessonName=x;
    this.buttonClass="btn btn-success active";
    //--------------------------------------------------------------------------------
    //pobierz z bazy danych tylko slowka z danej lekcji
    //this.lessonsFiltered=this.lessons.filter((l:word) => l.lesson===this.chosenLesson);

  }
  delete(i:number){
    this.lessonsFiltered.splice(i,1);
  }
  submit(){
    if (this.polish!="" || this.english!="") this.addWord();
    else alert("Provide both polish and english version of the word");
  }
  addWord() {
        var url='http://localhost:1337/lesson/id';
        var lessonID: string;
        var body=JSON.stringify({subject:this.chosenLessonName});
        this.http.post(url,body)
        .map(res=>res.json())
        .subscribe(data=>{
          this.chosenLessonID=data.id;
          url='http://localhost:1337/word';
          var body=JSON.stringify({polish:this.polish,english:this.english,lessonID: this.chosenLessonID});
          //-------------------------------------------------------------------------------
          this.http.post(url,body)
          .map(res=>res.json())
          .subscribe(
            response => {
              this.polish = "";
              this.english = "";
            },
            error => {
              console.log(error.text());
            }
          );
        })


/*
    var n={pol:this.polish,eng:this.english,lesson:this.chosenLesson,id:""};

    this.lessonsFiltered.push({pol:this.polish,eng:this.english,lesson:this.chosenLesson,id:""});
*/
  }
}

interface word {
  eng: string;
  pol: string;
  lesson: string;
  id: string;
}
