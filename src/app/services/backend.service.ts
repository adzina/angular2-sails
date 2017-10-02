import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()

export class BackendService{
  constructor(private http:Http){}
  getTeachersLessons(teacherID:string){
    var string='http://localhost:1337/lesson/'+teacherID;
    var lessons: string[];
    lessons=[];
    this.http.get(string).
    map(res => res.json()).
      subscribe(response=>{
        for (let index in response.lesson)
          lessons[index]=response.lesson[index].subject;

    });
    return lessons;
  }
}
