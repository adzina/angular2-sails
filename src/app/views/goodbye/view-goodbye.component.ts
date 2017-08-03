import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'goodbye',
  templateUrl: 'view-goodbye.component.html',
})

export class GoodbyeComponent{

  user: string;
  constructor(private _router:Router, private _loginService:LoginService){
    this.user=this._loginService.getUserName();
    this._loginService.setLoggedIn(false);
    this._loginService.setUserType(null);
    this._loginService.setUsername(null);
  }
  login(){
    this._router.navigate(['./']);
  }
}
