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

    this.show=false;
    this.className="sidenav_false";
    this.lessons=backendService.getTeachersLessons('4');
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
