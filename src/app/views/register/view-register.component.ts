import { Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {Response} from "@angular/http";
import {LoginService} from '../../services/login.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'register',
  templateUrl: './view-register.component.html'
})
export class RegisterComponent {
  inputType: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  registered: boolean;
  backend_error: string;
  constructor(private _router:Router, private _loginService:LoginService, private http:HttpClient) {
    this.inputType = 'password';
    this.email="";
    this.password="";
    this.registered=null;
    this.backend_error=null;
  }

    hideShowPassword(){
      if (this.inputType == 'password')
        this.inputType = 'text';
      else
        this.inputType = 'password';
    };

  submit(role:string){
    var body={first_name: this.first_name,last_name: this.last_name, email: this.email, password: this.password,role: role};
    var http_string="http://localhost:1337/user";
    this.http
        .post(http_string,
          body,)
          .subscribe(data => {
                this.registered=true;
          },
          (error:HttpErrorResponse) => {

            this.backend_error=`Backend returned code ${error.status}`;
          }
        );
    /*
    var results: ItemsResponse;
    var ob: Observable<Response>;
    ob=this.http.post(
      http_string, //url
      {first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      role:role}
    );
*/
    /*
      GET students/teachers
          in: name, surname
          jeśli user nie istnieje:
      POST students/teachers
            in: email, password, name, surname
      else{
      alert("Account with this credentials already exists");
    }
    */
    };

createUser(){
  if(this.password!="" && this.last_name!="" && this.first_name!="" && this.email!="")
    this.registered=true;
  else{
    this.registered=false;
  }
}

}

interface ItemsResponse {
  login: string,
  password: string
}
