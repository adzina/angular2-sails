import {Router} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'teacher-create-lesson',
  templateUrl: 'view-teacher-create-lesson.component.html'
})
export class TeacherCreateLessonComponent {

  subject: string;
  chosenLesson: string;
  created: boolean;
  constructor(private _router:Router){}
  create(){
    this.subject="";
    this.created=true;
  }
  goto(){
    this._router.navigate(['./teacher-words-panel']);
  }

}
