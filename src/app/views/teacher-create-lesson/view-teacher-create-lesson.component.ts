import {Router} from '@angular/router';
import {Component} from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {LoginService} from '../../services/login.service';
import {BackendService} from '../../services/backend.service';
import { AuthHttp} from 'angular2-jwt';
import { Group } from '../../models/group';

const now = new Date();

@Component({
  selector: 'teacher-create-lesson',
  templateUrl: 'view-teacher-create-lesson.component.html',
  styleUrls: ['view-teacher-create-lesson.component.scss']
})
export class TeacherCreateLessonComponent {
  groups: Group[];
  dataService: CompleterData;
  model: NgbDateStruct;
  subject: string;
  created: boolean;
  error: boolean;
  date: Date;
  backend_error:string;
  placeholder: string;
  group: string;
  constructor(private _router:Router,
              private http:AuthHttp,
              private _loginService:LoginService,
              private _backendService: BackendService,
              private completerService: CompleterService){
                this.placeholder="click to see all groups"
                this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
                this.subject=null;
                _backendService.getAllGroups().
                  subscribe(response=>{
                    this.groups=response;
                     this.dataService=completerService.local(this.groups,'name','name');
                      }
                    );
  }
  create(){
    if(this.subject!=null){
      this.date=new Date(this.model.year,this.model.month,this.model.day);
      this.date.setHours(0, -this.date.getTimezoneOffset(), 0, 0);

      this.sendRequest();
    }
    else{
      this.error=true;
    }
  }
  sendRequest(){
    this._backendService.createLesson(this._loginService.getUserID(),this.subject,this.date).subscribe(data => {

      for(var i=0;i<this.groups.length;i++){
        if(this.group==this.groups[i].name)
          {
            this._backendService.addGroupToLesson(this.groups[i].id,data.id).subscribe(result=>{
              this._loginService.setChosenLesson(data);
              this.subject=null;
              this.error=false;
              this.created=true;
            })
          }
      }
    }
  );
  }
  goto(){
    this._router.navigate(['./teacher-words-panel']);

  }

}
