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
  constructor(private _router:Router, private _loginService:LoginService){
    this.user=this._loginService.getUserName();
  }
  logout(){
    this._router.navigate(['./goodbye']);
  }
  chooseMode(){
    this._router.navigate(['./choose-mode']);
  }
}
