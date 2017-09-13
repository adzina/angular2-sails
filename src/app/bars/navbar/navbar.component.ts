import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {TeacherCreateLessonComponent} from '../../views/teacher-create-lesson/view-teacher-create-lesson.component';
import {TeacherAddStudentsComponent} from '../../views/teacher-add-students/view-teacher-add-students.component';
import {TeacherSeeProgressComponent} from '../../views/teacher-see-progress/view-teacher-see-progress.component';
import {TeacherWordsPanelComponent} from '../../views/teacher-words-panel/view-teacher-words-panel.component';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
})

export class NavbarComponent{

  user: string;
  user_type: string;
  constructor(private _router:Router, private _loginService:LoginService){
    this.user=_loginService.getUserName();
    this.user_type=_loginService.getUserType();
  }
  ngOnInit(){
    alert(this._loginService.getLoggedIn());
    this._loginService.checkLoggedIn();

  }
  logout(){
    this._router.navigate(['./goodbye']);
  }
  chooseMode(){
    this._router.navigate(['./choose-mode']);
  }
  navigate(nr: number){
    switch(nr){
      case(0): this._router.navigate(['./teacher-create-lesson']);break;
      case(1): this._router.navigate(['./teacher-words-panel']);break;
      case(2): this._router.navigate(['./teacher-add-students']);break;
      case(3): this._router.navigate(['./teacher-student-progress']);break;
    }
  }
}
