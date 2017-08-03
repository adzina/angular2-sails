import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'side-panel-lessons',
  templateUrl: 'side-panel-lessons.component.html',
})

export class SidePanelLessonsComponent {
  show:boolean;
  lessons: word[];
  lessonsUnique: string[];
  className:string;
  @Output() lessonChosen = new EventEmitter<string>();
  constructor() {
    //-----------------------------------------------------------------------------
    this.lessons = [{ eng: "one", pol: "jeden", id: "1", lesson: "words1" }, { eng: "two", pol: "dwa", id: "2", lesson: "words1" }, { eng: "three", pol: "trzy", id: "3", lesson: "words1" }, { eng: "cat", pol: "kot", id: "4", lesson: "words2" }, { eng: "dog", pol: "pies", id: "5", lesson: "words2" }];
    this.lessonsUnique=[];
    this.show=true;
    this.className="sidenav_true";
    this.onlyUniqueLessons();
    //------------------------------------------------------------------------------
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
  onlyUniqueLessons(){

    this.lessonsUnique[0]=this.lessons[0].lesson;
    var uniqueIndex=0;
    for(var i=1;i<this.lessons.length;i++){
      if(this.lessons[i].lesson!=this.lessonsUnique[uniqueIndex]){
        uniqueIndex++;
        this.lessonsUnique[uniqueIndex]=this.lessons[i].lesson;
      }
    }

  }
  choose(lessonNr: string) {
    this.lessonChosen.emit(lessonNr);
  }
}

interface word {
  eng: string;
  pol: string;
  lesson: string;
  id: string;
}
