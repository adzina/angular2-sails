import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'admin-navbar',
  templateUrl: 'admin-navbar.component.html',
})

export class AdminNavbarComponent{

  user: string;
  user_type: string;
  constructor(private _router:Router, private _loginService:LoginService){
    this.user=_loginService.getUserName();
    this.user_type=_loginService.getUserType();
  }
  logout(){
    this._router.navigate(['./goodbye']);
  }
  navigate(nr: number){
    switch(nr){
      case(0): this._router.navigate(['./choose-mode']);break;
      case(1): this._router.navigate(['./admin-create-group']);break;
      case(2): this._router.navigate(['./register']);break;
      case(3): this._router.navigate(['./admin-add-users']);break;
      case(4): this._router.navigate(['./goodbye']);break;
    }
  }
}
