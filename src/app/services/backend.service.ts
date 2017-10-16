import {Injectable} from '@angular/core';
import { AuthHttp} from 'angular2-jwt';
import {LoginService} from '../services/login.service';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Lesson} from '../models/lesson';
import {Word} from '../models/word';
import {Group} from '../models/group';
import {User} from '../models/user';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class BackendService{

  g_url='http://localhost:1337/';
  constructor(private http:AuthHttp,
              private _loginService: LoginService){}

  getTeachersLessons(): Observable<Lesson[]> {
    var teacherID=this._loginService.getUserID();
    var url=this.g_url+'lesson/'+teacherID;

  return  this.http.get(url)
   .map((res:Response) => res.json())
   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  getAllGroups(){
    var url=this.g_url+'group';
    var groups: Group[];
    groups=[];
    this.http.get(url).
    map(res => res.json()).
      subscribe(response=>{
        for (let index in response)
          groups[index]=response[index];
        },
        error=>{
            alert(error);
          }
        );
    return groups;
  }
  getAllUsers(): Observable<User[]>{
    var url=this.g_url+'user/getAll';
    var users: User[];
    users=[];
    return this.http.get(url)
    .map((res:Response)=>res.json())

  }
  getActiveUsers(groupID: string): Observable<User[]>{
    var url=this.g_url+'groupuser/getGroupsUsers';

    var body=JSON.stringify({groupID:groupID})
    return this.http.post(url,body)
      .map(res=>res.json());

  }

  getWords(lessonID:string): Observable<Word[]>{
    var url=this.g_url+'lessonword/getLessonsWords';
    var body=JSON.stringify({lessonID:lessonID});

    return this.http.post(url,body)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }
  addUserToGroup(userID: string, groupID:string): Observable<any>{
      var url=this.g_url+'groupuser/addUserToGroup';
      var body=JSON.stringify({groupID:groupID,userID:userID});

          return this.http.post(url,body)
          .map(res => res.json())
          .catch((error:any) => Observable.throw('Server error'));
  }
  removeUserFromGroup(userID: string, groupID: string): Observable<any>{
    var url=this.g_url+'groupuser/delete';
    var body=JSON.stringify({groupID:groupID,userID:userID});

    return this.http.post(url,body)
    .map(res => res.json())
    .catch((error:any) => Observable.throw('Server error'));
  }
  removeWordFromLesson(lessonID:string,wordID:string):Observable<any>{
    var url=this.g_url+'lessonWord/delete';
    var body=JSON.stringify({lessonID: lessonID,wordID: wordID});

    return this.http.post(url,body)
    .map(res => res.json())
    .catch((error:any) => Observable.throw('Server error'));


  }
}
