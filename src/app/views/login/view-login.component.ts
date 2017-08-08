import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../services/login.service';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'view-login.component.html',
})

export class LoginComponent{
  inputType: string;
  username: string;
  password: string;
  constructor(private _router:Router, private _loginService: LoginService, private http: HttpClient){
    this.inputType = 'password';
    this.username="";
    this.password="";
  }

  hideShowPassword(){
    if (this.inputType == 'password')
      this.inputType = 'text';
    else
      this.inputType = 'password';
  };

submit(type:string){
  var results: ItemsResponse;
  var string="/users/"+this.username;
//  this.http.get<ItemsResponse>(string).subscribe(data => {
//    results = data;
//  });
    //  console.log(results.password);
      this._loginService.setUserType(type);
      this._loginService.setLoggedIn(false);
    //sprawdza poprawność wprowadzonego hasła
      //if(this.password==results.password){
      if(this.username=="admin" && this.password=="admin"){
        this._loginService.setLoggedIn(true);
        this._loginService.setUsername(this.username);

        if(this._loginService.getUserType()=="student"){
          this._router.navigate(['./choose-mode']);
        }
        else{
          this._router.navigate(['./teacher-dashboard']);
        }
      }
      else{
        alert('Wrong credentials');
      }
  };
register(){
  this._router.navigate(['./register']);
}
}
interface ItemsResponse {
  login: string,
  password: string
}
