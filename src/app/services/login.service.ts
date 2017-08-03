import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()

export class LoginService{
  loggedIn: boolean;
  userName: string;
  userType: string;
  mode: number;
  constructor(private _router:Router){

  }
  getLoggedIn(){
    return this.loggedIn;
  };
  getUserName(){
    return this.userName;
  };
  getUserType(){
    return this.userType;
  };
  getMode(){
    return this.mode;
  }
  setLoggedIn(loggedIn:boolean){
    this.loggedIn=loggedIn;
  };
  setUsername(username:string){
    this.userName=username;

  };
  setUserType(userType:string){
    this.userType=userType;

  }
  setMode(mode:number){
    this.mode=mode;
  }
  checkLoggedIn(){
    if(!this.loggedIn){
      this._router.navigate(['./login']);
    };
  }
}
