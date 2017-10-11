import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
})

export class NavbarComponent{

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
      case(1): this._router.navigate(['./teacher-create-lesson']);break;
      case(2): this._router.navigate(['./teacher-words-panel']);break;
      case(3): this._router.navigate(['./teacher-add-students']);break;
      case(4): this._router.navigate(['./teacher-see-progress']);break;
      case(5): this._router.navigate(['./goodbye']);break;
    }
  }
}
