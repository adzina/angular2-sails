import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginService} from '../../services/login.service';
const now = new Date();

@Component({
  selector: 'teacher-create-lesson',
  templateUrl: 'view-teacher-create-lesson.component.html'
})
export class TeacherCreateLessonComponent {

  model: NgbDateStruct;
  subject: string;
  chosenLesson: string;
  created: boolean;
  error: boolean;
  date: Date;
  backend_error:string;
  constructor(private _router:Router,
              private http:HttpClient,
              private _login:LoginService){
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    this.subject=null;
  }
  create(){
    if(this.subject!=null){
      this.date=new Date(this.model.year,this.model.month,this.model.day);
      this.date.setHours(0, -this.date.getTimezoneOffset(), 0, 0);
      this.sendRequest();
      this.subject=null;
      this.error=false;
      this.created=true;
    }
    else{
      this.error=true;
    }
  }
  sendRequest(){
    var body={teacherID:this._login.getUserID(),subject:this.subject, date: this.date.toISOString()};
    var http_string="http://localhost:1337/lesson";
    this.http
        .post(http_string,
          body,)
          .subscribe(data => {
                ;
          },
          (error:HttpErrorResponse) => {

            this.backend_error=`Backend returned code ${error.status}`;
          }
        );
  }
  goto(){
    this._router.navigate(['./teacher-words-panel']);

  }

}
