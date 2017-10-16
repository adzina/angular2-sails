import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';
import { SidePanelLessonsComponent } from '../../bars/side-panel-lessons/side-panel-lessons.component';
import { Group } from '../../models/group';
import { Lesson } from '../../models/lesson'
@Component({
  selector: 'teacher-add-students',
  templateUrl: './view-teacher-add-students.component.html'
})
export class TeacherAddStudentsComponent{

  chosenLesson: Lesson;
  receivedGroups: Group[];
  receivedActiveGroups: Group[];
  activeGroups: Group[];
  inactiveGroups: Group[];
  constructor(private _loginService: LoginService,
              private _backendService: BackendService) {

                this.receivedGroups=[];
                 this.activeGroups=[];
                 this.inactiveGroups=[];

                this._backendService.getAllMyGroups().subscribe(response=>{
                  for (let index in response)
                  this.receivedGroups[index]=response[index];
      },
      error=>{
          alert(error);
        }
   );
  }
  handleLessonChosen(x:Lesson){
    this.activeGroups=[];
    this.inactiveGroups=[];
    this.chosenLesson=x;
    this._backendService.getActiveGroups(x.id)
    .subscribe(response=>{
      console.log('response');
      console.log(response);
      console.log(this.receivedGroups);
        this.receivedActiveGroups=response;
        this.divideGroups();
        error=>{
            alert(error);
          };
      });

  }
  divideGroups(){
    let count_active=0;
    let count_inactive=0;
    let flag=false;
    for (var i=0; i<this.receivedGroups.length;i++){
      for (var j=0;j< this.receivedActiveGroups.length;j++)
        {
          if(j==0) {flag=false;}
          if (this.receivedGroups[i].id==this.receivedActiveGroups[j].id)
              {
                this.activeGroups[count_active]=this.receivedActiveGroups[j];
                count_active++;
                flag=true;
              }
        }
        if(flag==false){
          this.inactiveGroups[count_inactive]=this.receivedGroups[i];
          count_inactive++;
        }
    }
  }
  delete(i:number){
    var user=this.activeGroups[i];
        this._backendService.removeGroupFromLesson(user.id,this.chosenLesson.id).subscribe(response=>
        {
          this.inactiveGroups=[];
          this.activeGroups=[];
          this.handleLessonChosen(this.chosenLesson);
        });
  }
  add(i:number){
  var user=this.inactiveGroups[i];
      this._backendService.addGroupToLesson(user.id,this.chosenLesson.id).subscribe(response=>
      {
        this.inactiveGroups=[];
        this.activeGroups=[];
        this.handleLessonChosen(this.chosenLesson);
      });
  }
}
