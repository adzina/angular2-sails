import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'teacher-dashboard',
  templateUrl: './view-teacher-dashboard.component.html'
})
export class TeacherDashboardComponent {

  constructor(private _router: Router,private _loginService: LoginService){

  }
  ngOnInit(){
    this._loginService.checkLoggedIn();
  }
  setAction(a:number){
    switch(a){
      case 0: this._router.navigate(['/teacher-create-lesson']);break;
      case 1: this._router.navigate(['/teacher-words-panel']); break;
      case 2: this._router.navigate(['/teacher-add-students']);break;
      case 3: this._router.navigate(['/teacher-see-progress']);break;
    }
  }

}
