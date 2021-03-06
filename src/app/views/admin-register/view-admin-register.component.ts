import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { AuthHttp} from 'angular2-jwt';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginService} from '../../services/login.service';
import {BackendService} from '../../services/backend.service';
@Component({
  selector: 'register',
  templateUrl: './view-admin-register.component.html'
})
export class AdminRegisterComponent {
  inputType: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  registered: boolean;
  backend_error: string;
  constructor(private _router:Router,
     private _loginService:LoginService,
     private _backendService: BackendService,
     private http:AuthHttp) {
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
    this._backendService.createUser(this.first_name,this.last_name,this.email,this.password,role).subscribe(data=>{

            this.registered=true;
    },(error:HttpErrorResponse) => {

      this.backend_error=`Backend returned code ${error.status}`;
    })

  }

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
