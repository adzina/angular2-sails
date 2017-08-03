import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'choose-mode',
  templateUrl: 'view-choose-mode.component.html',
})

export class ChooseModeComponent{

  mode: number;
  constructor(private _router: Router,private _loginService: LoginService){
    this.mode=null;
  }
  ngOnInit(){
    this._loginService.checkLoggedIn();
  }
  setmode(m:number){
    this._loginService.setMode(m);
    this._router.navigate(['/dashboard']);
  }
}
