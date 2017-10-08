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
  getAllGroups(){
    var string='http://localhost:1337/group';
    var groups: string[];
    groups=[];
    this.http.get(string).
    map(res => res.json()).
      subscribe(response=>{
        for (let index in response)
          groups[index]=response[index].name;
        },
        error=>{
            alert(error);
          }
        );
    return groups;
  }
  getAllUsers(){
    var string='http://localhost:1337/user/getAll';
    var users: user[];
    users=[];
    this.http.get(string)
    .map(res=>res.json())
    .subscribe(response=>{
      for (let index in response)
        users[index]=response[index];

        return users;
      },
      error=>{
          alert(error);
        }
   );
   return users;
  }
  getActiveUsers(){
    var string='http://localhost:1337/groupuser';
    var activeUsersID: string[];
    var activeUsers: user[];
    activeUsersID=[];
    activeUsers=[];

    this.http.get(string)
      .map(res=>res.json())
      .subscribe(response=>{
        for (let index in response)
          activeUsersID[index]=response[index].userID
        },
        error=>{
            alert(error);
          }
    );

    for(let i in activeUsersID)
      this.http.get('http://localhost:1337/user/findByID')
      .map(res=>res.json())
      .subscribe(response=>{
        activeUsers[i]=response
      })
    return activeUsers;
  }
}

interface user{
  id: string,
  first_name: string,
  last_name: string,
  role: string
}
