import { Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../services/login.service';
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
  constructor(private _router:Router, private _loginService:LoginService, private http:HttpClient) {
    this.inputType = 'password';
    this.email="";
    this.password="";
    this.registered=null;
  }

    hideShowPassword(){
      if (this.inputType == 'password')
        this.inputType = 'text';
      else
        this.inputType = 'password';
    };

  submit(type:string){
    var results: ItemsResponse;
    var string="localhost:1337/users/"+this.email;
    this.http.get<ItemsResponse>(string).subscribe(
      data => {
      alert('An account with this e-mail already exists');
    },
      err=>{
        if(err="No such user"){
          this.createUser();
        }
      }
  );
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
