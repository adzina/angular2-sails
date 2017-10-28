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
  chosenLesson: Lesson;
  buttonClass: string;
  constructor(private _loginService: LoginService,
              private http: Http,
              private _backendService: BackendService) {
    this.words=[];
    this.buttonClass="btn btn-success disabled";

  }

  handleLessonChosen(x:Lesson){
    this.chosenLesson=x;
    this.buttonClass="btn btn-success active";
    var lessonID: string;

    this._backendService.getWords(x.id).subscribe(words=>{
      this.polish = "";
      this.english = "";
      this.words=[];
      this.words=words;

  });
  }
  delete(i:number){
    var word=this.words[i];
    this._backendService.removeWordFromLesson(this.chosenLesson.id,word.id)
    .subscribe(deleted=>{
      this.words=[];
      this.handleLessonChosen(this.chosenLesson);
    })
  }
  submit(){
    if (this.polish!="" || this.english!="") this.addWord();
    else alert("Provide both polish and english version of the word");
  }
  addWord() {
    this._backendService.addWord(this.polish,this.english,this.chosenLesson.id)
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
