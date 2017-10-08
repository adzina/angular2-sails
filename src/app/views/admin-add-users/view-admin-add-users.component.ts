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
  receivedUsers: user[];
  receivedActiveUsers: user[];
  activeUsers: user[];
  inactiveUsers: user[];

  constructor(private _loginService: LoginService,
              private _backendService: BackendService) {
    this.receivedUsers=this._backendService.getAllUsers();
    console.log(this.receivedUsers);
    console.log(this.receivedUsers[1]);
    this.receivedActiveUsers=this._backendService.getActiveUsers();
    this.activeUsers=[];
    this.inactiveUsers=[];
    this.divideUsers();
    this.myGroupsInactive=['group1','group2'];
    this.myGroupsActive=['group3','group4'];
  }
  divideUsers(){
    let count_active=0;
    let count_inactive=0;
    let flag=false;
      for(let i in this.receivedUsers) console.log(i);
    for (let i in this.receivedUsers){
      for (let j in this.receivedActiveUsers)
        {
          if (this.receivedUsers[i].id==this.receivedActiveUsers[j].id)
              {
                this.activeUsers[count_active]=this.receivedActiveUsers[j];
                count_active++;
                flag=true;
              }
        }
        if(flag==false){
          console.log(count_inactive);
          this.inactiveUsers[count_inactive]=this.receivedUsers[i];
          count_inactive++;
        }
    }
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
    var user=this.activeUsers[i];
    this.activeUsers.splice(i,1);
    this.inactiveUsers.push(user);
  }
  add(i:number){
    alert("ok");
      var user=this.inactiveUsers[i];
      this.inactiveUsers.splice(i,1);
      this.activeUsers.push(user);
  }
}
interface user{
  id: string,
  first_name: string,
  last_name: string,
  role: string
}
