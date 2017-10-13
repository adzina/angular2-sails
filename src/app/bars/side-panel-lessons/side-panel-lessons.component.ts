import { Component,Output,EventEmitter } from '@angular/core';
import {BackendService} from '../../services/backend.service';
@Component({
  moduleId: module.id,
  selector: 'side-panel-lessons',
  templateUrl: 'side-panel-lessons.component.html',
})

export class SidePanelLessonsComponent {
  show:boolean;
  lessons: string[];
  className:string;
  @Output() lessonChosen = new EventEmitter<string>();
  constructor(private backendService:BackendService) {

    this.show=true;
    this.className="sidenav_true";
    this.lessons=[];
    backendService.getTeachersLessons().
        subscribe(response=>{
          console.log
          for (let index in response)
            this.lessons[index]=response[index].subject;
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

  choose(lessonNr: string) {
    this.lessonChosen.emit(lessonNr);
  }
}
