import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { BackendService} from '../../services/backend.service';
import { Router } from '@angular/router';
import { SidePanelLessonsComponent } from '../../bars/side-panel-lessons/side-panel-lessons.component';
import {Http} from '@angular/http';
import {Word} from '../../models/word';
import {Lesson} from '../../models/lesson';
@Component({
  selector: 'teacher-words-panel',
  templateUrl: 'view-teacher-words-panel.component.html',
})

export class TeacherWordsPanelComponent {
  polish: string;
  english: string;
  words: Word[];
  lessonsFiltered: word[];
  lessonsUnique: string[];
  chosenLesson: Lesson;
  buttonClass: string;
  constructor(private _loginService: LoginService,
              private http: Http,
              private _backendService: BackendService) {
    this.lessonsUnique=[];
    this.words=[];
    this.buttonClass="btn btn-success disabled";

  }

  handleLessonChosen(x:Lesson){
    this.chosenLesson=x;
    this.buttonClass="btn btn-success active";
    var url='http://localhost:1337/lesson/id';
    var lessonID: string;

    this._backendService.getWords(x.id).subscribe(words=>{
      this.polish = "";
      this.english = "";
      this.words=[];
      for(let i=0;i<words.length;i++)
        this.words.push(words[i]);

  });
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
          var url='http://localhost:1337/word';
          var body=JSON.stringify({polish:this.polish,english:this.english,lessonID: this.chosenLesson.id});
          this.http.post(url,body)
          .map(res=>res.json())
          .subscribe(
            response => {
              this.polish = "";
              this.english = "";
              this.words=[];
              this.handleLessonChosen(this.chosenLesson);
            },
            error => {
              console.log(error.text());
            }
          );


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
