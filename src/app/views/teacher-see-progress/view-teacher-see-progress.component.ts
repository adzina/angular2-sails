import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';
import { Group } from '../../models/group';
import { User } from '../../models/user';

@Component({
  selector: 'teacher-see-progress',
  templateUrl: './view-teacher-see-progress.component.html'
})
export class TeacherSeeProgressComponent{
  groups: Group[];
  students:User[];
  groupChosen=false;
  constructor(private _loginService: LoginService,
              private _backendService: BackendService) {
    _backendService.getAllMyGroups().subscribe(
      data=>{
        this.groups=data
      }
    )
  }
  choose(i){
    this._backendService.getActiveUsers(this.groups[i].id).subscribe(
      data=>{
        this.students=data;
          this.groupChosen=true;
      }
    )
  }
  student(i){
  
  }

}
