import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { SidePanelLessonsComponent } from '../../bars/side-panel-lessons/side-panel-lessons.component';

@Component({
  moduleId: module.id,
  selector: 'teacher-panel',
  templateUrl: 'view-teacher-panel.component.html',
})

export class TeacherPanelComponent {
  polish: string;
  english: string;
  lessons: word[];
  lessonsFiltered: word[];
  lessonsUnique: string[];
  chosenLesson: string;
  constructor(private _loginService: LoginService) {
    //-----------------------------------------------------------------------------
    this.lessons = [{ eng: "one", pol: "jeden", id: "1", lesson: "words1" }, { eng: "two", pol: "dwa", id: "2", lesson: "words1" }, { eng: "three", pol: "trzy", id: "3", lesson: "words1" }, { eng: "cat", pol: "kot", id: "4", lesson: "words2" }, { eng: "dog", pol: "pies", id: "5", lesson: "words2" }];
    this.chosenLesson = null;
    this.lessonsUnique=[];
    this.onlyUniqueLessons();
    //------------------------------------------------------------------------------
  }
  ngOnInit(){
    this._loginService.checkLoggedIn();

  }
  handleLessonChosen(x:string){
    this.chosenLesson=x;
    //--------------------------------------------------------------------------------
    //pobierz z bazy danych tylko slowka z danej lekcji
    this.lessonsFiltered=this.lessons.filter((l:word) => l.lesson===this.chosenLesson);
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
  submit() {
    //-------------------------------------------------------------------------------
    //push to database
    //------------------------------------------------------------------------------

    var n={pol:this.polish,eng:this.english,lesson:this.chosenLesson,id:""};

    this.lessonsFiltered.push({pol:this.polish,eng:this.english,lesson:this.chosenLesson,id:""});
    this.polish = "";
    this.english = "";
  }

}

interface word {
  eng: string;
  pol: string;
  lesson: string;
  id: string;
}
