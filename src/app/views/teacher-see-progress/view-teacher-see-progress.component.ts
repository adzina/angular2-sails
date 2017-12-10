import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';
import { Group } from '../../models/group';

@Component({
  selector: 'teacher-see-progress',
  templateUrl: './view-teacher-see-progress.component.html'
})
export class TeacherSeeProgressComponent{
  groups: Group[];
  chosenLesson: string;
  constructor(private _loginService: LoginService,
              private _backendService: BackendService) {
    _backendService.getAllMyGroups().subscribe(
      data=>{
        this.groups=data
      }
    )
  }
  choose(i){
    alert("group chosen: "+this.groups[i].name);
  }

}
