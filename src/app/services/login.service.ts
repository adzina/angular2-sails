import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()

export class LoginService{
  loggedIn: boolean;
  userName: string;
  name: string;
  userType: string;
  mode: number;
  constructor(private _router:Router){

  }
  getLoggedIn(){
    return this.loggedIn;
  }
  getUserName(){
    return this.userName;
  }
  getName(){
    return this.name;
  }
  getUserType(){
    return this.userType;
  }
  getMode(){
    return this.mode;
  }
  setLoggedIn(loggedIn:boolean){
    this.loggedIn=loggedIn;
  }
  setUsername(username:string){
    this.userName=username;

  }
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
  checkLogin(){
    /*
      W zaleznosci od this.type: student/teacher
                            findOne
                            in: login
                            out: password
                    dzialania:
                              jeśli password poprawny
                                this.name=user.name;
                                this.loggedIn=true;
                                return true;
                              else
                                  return false;
    */
  }
}
