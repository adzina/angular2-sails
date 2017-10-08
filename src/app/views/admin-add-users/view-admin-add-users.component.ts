import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';
import { SidePanelGroupsComponent } from '../../bars/side-panel-groups/side-panel-groups.component';


@Component({
  selector: 'admin-add-users',
  templateUrl: './view-admin-add-users.component.html'
})
export class AdminAddUsersComponent{

  chosenGroup: string;
  myGroupsActive: string[];
  myGroupsInactive:string[];
  users: string[];
  constructor(private _loginService: LoginService,
              private _backendService: BackendService) {
    this.users=this._backendService.getAllUsers();
    this.myGroupsInactive=['group1','group2'];
    this.myGroupsActive=['group3','group4'];
  }
  handleGroupChosen(x:string){
    this.chosenGroup=x;
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
