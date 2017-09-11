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
  ngOnInit(){
    alert(this._loginService.getLoggedIn());
    this._loginService.checkLoggedIn();

  }
  logout(){
    this._router.navigate(['./goodbye']);
  }
  chooseMode(){
    this._router.navigate(['./choose-mode']);
  }
}
