import {Injectable} from '@angular/core';
import { AuthHttp} from 'angular2-jwt';

//import { HttpModule, Http, RequestOptions,ConnectionBackend } from '@angular/http';
@Injectable()

export class BackendService{
  constructor(private http:AuthHttp){}
  getTeachersLessons(teacherID:string){
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
