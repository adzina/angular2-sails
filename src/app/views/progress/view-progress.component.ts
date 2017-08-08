import { Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-progress',
  templateUrl: './view-progress.component.html'
})
export class ProgressComponent{

  constructor(private _router: Router,private _loginService: LoginService) { }

  ngOnInit() {

      this._loginService.checkLoggedIn();
  }

}
