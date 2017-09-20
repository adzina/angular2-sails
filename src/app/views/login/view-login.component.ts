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
  email: string;
  password: string;
  wrong: boolean;
  constructor(private _router:Router, private _loginService: LoginService, private http: HttpClient){
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

submit(type:string){
  var results: ItemsResponse;
  var first_name: string;
  var http_string="http://localhost:1337/users/"+this.email
  this.http.get<ItemsResponse>(http_string).subscribe(data => {
    if(!data){alert('nth');this.wrong=true;return 0;}
    this._loginService.setUserType(type);
    if(this.password==data.password){
        this._loginService.setLoggedIn(true);
        this._loginService.setUsername(this.email);

        if(this._loginService.getUserType()=="student"){
          this._router.navigate(['./choose-mode']);
        }
        else{
          this._router.navigate(['./teacher-create-lesson']);
        }
  }
    //===================================================================

  });
  /*
  this._loginService.setUserType(type);
  if(this.email=="admin" && this.password=="admin"){
    this._loginService.setLoggedIn(true);
    this._loginService.setUsername(this.email);

    if(this._loginService.getUserType()=="student"){
      this._router.navigate(['./choose-mode']);
    }
    else{
      this._router.navigate(['./teacher-create-lesson']);
    }
  }
  else{
    this.wrong=true;
  }
*/
      //==================================================================
      /*

            let correct=this._loginService.checkLogin();
            if(correct){
            if(this._loginService.getUserType()=="student"){
              this._router.navigate(['./choose-mode']);
            }
            else{
              this._router.navigate(['./teacher-dashboard']);
            }
          }
            else{
            alert('The credentials do not match any existing account')
          }
      */
  };
register(){
  this._router.navigate(['./register']);
}
}
interface ItemsResponse {
  email: string,
  password: string
}
