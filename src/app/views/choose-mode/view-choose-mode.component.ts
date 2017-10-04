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
    this.setUserID();
  }
  setmode(m:number){
    if(!m)this._router.navigate(['/register']);
    else this._router.navigate(['/teacher-create-lesson']);
  }
  //===================================
  setUserID(){
    this._loginService.setUserID('4');
  }
  //====================================
}
