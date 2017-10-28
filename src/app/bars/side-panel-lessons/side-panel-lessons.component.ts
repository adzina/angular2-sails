import { Component,Output,EventEmitter } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import { LoginService } from '../../services/login.service';
import {Lesson} from '../../models/lesson';

@Component({
  moduleId: module.id,
  selector: 'side-panel-lessons',
  templateUrl: 'side-panel-lessons.component.html',
})

export class SidePanelLessonsComponent {
  show:boolean;
  lessons: Lesson[];
  className:string;
  @Output() lessonChosen = new EventEmitter<Lesson>();
  constructor(private backendService:BackendService,
              private loginService:LoginService) {

    this.show=true;
    this.className="sidenav_true";
    this.lessons=[];
    backendService.getTeachersLessons().
        subscribe(response=>{

          for (let index in response)
            {this.lessons[index]=response[index]}

          this.lessonChosen.emit(this.loginService.getChosenLesson());

          },
          error=>{
              alert(error);
            }
          );
  }
  toggle(){
    if(this.show){
      this.show=false;
      this.className="sidenav_false";}
    else{
      this.show=true;
      this.className="sidenav_true";
    }
  }

  choose(nr:string) {
    var lesson=this.lessons[nr];
    this.lessonChosen.emit(lesson);
  }
}
