import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { SidePanelLessonsComponent } from '../../bars/side-panel-lessons/side-panel-lessons.component';


@Component({
  selector: 'teacher-add-students',
  templateUrl: './view-teacher-add-students.component.html'
})
export class TeacherAddStudentsComponent{

  chosenLesson: string;
  myGroupsActive: string[];
  myGroupsInactive:string[];
  constructor(private _loginService: LoginService) {
    this.myGroupsInactive=['group1','group2'];
    this.myGroupsActive=['group3','group4'];
  }
  handleLessonChosen(x:string){
    this.chosenLesson=x;
    /*
    students2lessons
    findAll
    in: lesson_name
    out: [studentID]

    students
    finaAll
    out: [students]

    jeśli student znajduje się na pierwszej i drugiej liście, to obok jego nazwiska przycisk "remove" wpp "add"
    */
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
