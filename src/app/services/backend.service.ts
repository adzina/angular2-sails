import {Injectable} from '@angular/core';
import { AuthHttp} from 'angular2-jwt';
import {LoginService} from '../services/login.service';

@Injectable()

export class BackendService{

  g_url='http://localhost:1337/';
  constructor(private http:AuthHttp,
              private _loginService: LoginService){}

  getTeachersLessons(){
    var teacherID=this._loginService.getUserID();
    var url=this.g_url+'lesson/'+teacherID;
    var lessons: string[];
    lessons=[];
    this.http.get(url).
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
    var url=this.g_url+'group';
    var groups: string[];
    groups=[];
    this.http.get(url).
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
    var url=this.g_url+'user/getAll';
    var users: user[];
    users=[];
    this.http.get(url)
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
    var url=this.g_url+'groupuser';
    var activeUsersID: string[];
    var activeUsers: user[];
    activeUsersID=[];
    activeUsers=[];

    this.http.get(url)
      .map(res=>res.json())
      .subscribe(response=>{
        for (let index in response)
          activeUsersID[index]=response[index].userID
        },
        error=>{
            alert(error);
          }
    );

    var url=this.g_url+'user/findByID';
    for(let i in activeUsersID)
      this.http.get(url)
      .map(res=>res.json())
      .subscribe(response=>{
        activeUsers[i]=response
      })
    return activeUsers;
  }

  getWords(lessonID:string){
    var url=this.g_url+'/lessonword/getLessonsWords';
    var body=JSON.stringify({lessonID:lessonID});
    
  }
}

interface user{
  id: string,
  first_name: string,
  last_name: string,
  role: string
}
