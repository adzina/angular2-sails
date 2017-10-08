import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'choose-mode',
  templateUrl: 'view-choose-mode.component.html',
})
export class ChooseModeComponent{

  jwt: string;
  response: string;
  mode: number;

  constructor(private _router: Router,private _loginService: LoginService){
    this.mode=null;
  }
  setmode(m:number){
    switch(m){
      case(0):this._router.navigate(['/register']);break;
      case(1):this._router.navigate(['/admin-create-group']);break;
      case(2):this._router.navigate(['/teacher-create-lesson']);
    }
  }
}
