import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './views/login/view-login.component';
import {LoginService} from './services/login.service';
import { DashboardComponent } from './views/dashboard/view-dashboard.component';
import { SidePanelLessonsComponent } from './bars/side-panel-lessons/side-panel-lessons.component';
import { ChooseModeComponent } from './views/choose-mode/view-choose-mode.component';
import { NavbarComponent } from './bars/navbar/navbar.component';
import { GoodbyeComponent } from './views/goodbye/view-goodbye.component';
import {TeacherCreateLessonComponent} from './views/teacher-create-lesson/view-teacher-create-lesson.component';
import { TeacherWordsPanelComponent } from './views/teacher-words-panel/view-teacher-words-panel.component';
import { TeacherDashboardComponent } from './views/teacher-dashboard/view-teacher-dashboard.component';
import { TeacherAddStudentsComponent } from './views/teacher-add-students/view-teacher-add-students.component';
import { RegisterComponent } from './views/register/view-register.component';
import { ProgressComponent } from './views/progress/view-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidePanelLessonsComponent,
    ChooseModeComponent,
    NavbarComponent,
    GoodbyeComponent,
    TeacherCreateLessonComponent,
    TeacherWordsPanelComponent,
    TeacherDashboardComponent,
    TeacherAddStudentsComponent,
    RegisterComponent,
    ProgressComponent,
  ],
  imports: [
    AlertModule.forRoot(),
	  BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule //http://www.concretepage.com/angular-2/angular-2-http-post-example
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
