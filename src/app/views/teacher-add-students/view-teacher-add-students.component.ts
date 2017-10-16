import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { SidePanelLessonsComponent } from '../../bars/side-panel-lessons/side-panel-lessons.component';
import { Lesson } from '../../models/lesson';

@Component({
  selector: 'teacher-add-students',
  templateUrl: './view-teacher-add-students.component.html'
})
export class TeacherAddStudentsComponent{

  chosenLesson: Lesson;
  myGroupsActive: string[];
  myGroupsInactive:string[];
  constructor(private _loginService: LoginService) {
    this.myGroupsInactive=['group1','group2'];
    this.myGroupsActive=['group3','group4'];
  }
  handleLessonChosen(x:Lesson){
    this.chosenLesson=x;
  
  }

  delete(i:number){
    var group=this.myGroupsActive[i];
    this.myGroupsActive.splice(i,1);
    this.myGroupsInactive.push(group);
  }
  add(i:number){
      var group=this.myGroupsInactive[i];
      this.myGroupsInactive.splice(i,1);
      this.myGroupsActive.push(group);
  }
}
