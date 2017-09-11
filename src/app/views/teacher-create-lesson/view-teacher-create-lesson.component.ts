
import { Component } from '@angular/core';

@Component({
  selector: 'teacher-create-lesson',
  templateUrl: 'view-teacher-create-lesson.component.html'
})
export class TeacherCreateLessonComponent {

  chosenLesson: string;
  constructor(){

  }
  create(){
    alert("lesson created, you can now add words");
  }

}
