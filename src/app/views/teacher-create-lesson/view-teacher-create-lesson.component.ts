import {Router} from '@angular/router';
import { Component } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
const now = new Date();

@Component({
  selector: 'teacher-create-lesson',
  templateUrl: 'view-teacher-create-lesson.component.html'
})
export class TeacherCreateLessonComponent {

  model: NgbDateStruct;
  subject: string;
  chosenLesson: string;
  created: boolean;
  constructor(private _router:Router){
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
  create(){
    this.subject="";
    this.created=true;
  }
  goto(){
    this._router.navigate(['./teacher-words-panel']);

  }

}
