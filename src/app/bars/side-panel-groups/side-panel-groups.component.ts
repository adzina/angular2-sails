import { Component,Output,EventEmitter } from '@angular/core';
import {BackendService} from '../../services/backend.service';
@Component({
  moduleId: module.id,
  selector: 'side-panel-groups',
  templateUrl: 'side-panel-groups.component.html',
})

export class SidePanelGroupsComponent {
  show:boolean;
  groups: string[];
  className:string;
  @Output() groupChosen = new EventEmitter<string>();
  constructor(private backendService:BackendService) {

    this.show=false;
    this.className="sidenav_false";
    this.groups=backendService.getAllGroups();
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

  choose(groupNr: string) {
    this.groupChosen.emit(groupNr);
  }
}
