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
  constructor(private _loginService: LoginService,
              private http: Http) {
    this.chosenLessonID = null;
    this.lessonsUnique=[];
  }

  handleLessonChosen(x:string){
    var string='http://localhost:1337/lesson/id'+x;
    var lessonID: string;
    var body=JSON.stringify({lessonID});
    this.http.get(string,body)
    .map(res=>res.json())
    .subscribe(data=>{
      this.chosenLessonID=data.id;
    })
    //--------------------------------------------------------------------------------
    //pobierz z bazy danych tylko slowka z danej lekcji
    //this.lessonsFiltered=this.lessons.filter((l:word) => l.lesson===this.chosenLesson);

  }
  delete(i:number){
    this.lessonsFiltered.splice(i,1);
  }
  submit() {
    var string='http://localhost:1337/word';
    var body=JSON.stringify({polish:this.polish,english:this.english,lessonID: this.chosenLessonID});
    //-------------------------------------------------------------------------------
    this.http.post(string,body)
    .map(res=>res.json())
    .subscribe(
      response => {
        console.log("ok");
        this.polish = "";
        this.english = "";
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
