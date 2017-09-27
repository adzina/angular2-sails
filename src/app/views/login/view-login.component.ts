import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {LoginService} from '../../services/login.service';

import * as bcrypt from "bcryptjs";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'view-login.component.html',
})

export class LoginComponent{
  inputType: string;
  email: string;
  password: string;
  wrong: boolean;
  constructor(private _router:Router, private _loginService: LoginService, private http: Http){
    this.inputType = 'password';
    this.email="";
    this.password="";
    this._loginService.setLoggedIn(false);
  }

  hideShowPassword(){
    if (this.inputType == 'password')
      this.inputType = 'text';
    else
      this.inputType = 'password';
  };

  submit(type:string) {
    event.preventDefault();
    var email=this.email;
    var pswd=this.password;
    let body = JSON.stringify({ email, pswd });
    this.http.post('http://localhost:1337/sessions/create', body)
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this._router.navigate(['./choose-mode']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
  /*
submit(type:string){
  var results: ItemsResponse;
  var first_name: string;
  var http_string="http://localhost:1337/users/"+this.email

  this.http.get<ItemsResponse>(http_string).subscribe(
    data => {
      bcrypt.compare(this.password, data.password, function(err, res) {
        if(res==true){
          alert("haslo ok");
          //====================================================================
          this._loginService.setUserType(type);
          this._loginService.setUserID(data.id);
          this._loginService.setLoggedIn(true);
          this._loginService.setUsername(data.first_name);
          this._router.navigate(['./choose-mode']);
          //=================================================================
        }
        else this.wrong=true;
  });


      },


    (error)=>{
      this.wrong=true;

    });

  };
*/
register(){
  this._router.navigate(['./register']);
}

}
interface ItemsResponse {
  email: string,
  password: string,
  first_name: string,
  id:string
}
