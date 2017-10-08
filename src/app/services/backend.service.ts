import {Injectable} from '@angular/core';
import { AuthHttp} from 'angular2-jwt';
import {LoginService} from '../services/login.service';

@Injectable()

export class BackendService{
  constructor(private http:AuthHttp,
              private _loginService: LoginService){}

  getTeachersLessons(){
    var teacherID=this._loginService.getUserID();
    var string='http://localhost:1337/lesson/'+teacherID;
    var lessons: string[];
    lessons=[];
    this.http.get(string).
    map(res => res.json()).
      subscribe(response=>{
        for (let index in response.lesson)
          lessons[index]=response.lesson[index].subject;
        },
        error=>{
            alert(error);
          }
        );
    return lessons;
  }

}
