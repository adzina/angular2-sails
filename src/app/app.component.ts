import { Component, ViewChild } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Variables for modal example
    @ViewChild('autoShownModal') public autoShownModal:ModalDirective;
    public isModalShown:boolean = false;

    public showModal():void {
      this.isModalShown = true;
    }

    public hideModal():void {
      this.autoShownModal.hide();
    }

    public onHidden():void {
      this.isModalShown = false;
    }

    public modalTitle: string = 'shown modal';
    public modalContent: string = 'I am a modal that is shown right after initialization! I wasn\'t present in DOM until you clicked the button  When you close me, I\'ll be removed from the DOM';

}
