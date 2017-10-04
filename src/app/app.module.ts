import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { HttpModule, Http, RequestOptions,ConnectionBackend } from '@angular/http';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AuthGuard } from './common/auth.guard';

import { LoginService } from './services/login.service';
import { BackendService } from './services/backend.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './views/login/view-login.component';
import { DashboardComponent } from './views/dashboard/view-dashboard.component';
import { SidePanelLessonsComponent } from './bars/side-panel-lessons/side-panel-lessons.component';
import { ChooseModeComponent } from './views/choose-mode/view-choose-mode.component';
import { NavbarComponent } from './bars/navbar/navbar.component';
import { GoodbyeComponent } from './views/goodbye/view-goodbye.component';
import { TeacherCreateLessonComponent } from './views/teacher-create-lesson/view-teacher-create-lesson.component';
import { TeacherWordsPanelComponent } from './views/teacher-words-panel/view-teacher-words-panel.component';
import { TeacherSeeProgressComponent } from './views/teacher-see-progress/view-teacher-see-progress.component';
import { TeacherAddStudentsComponent } from './views/teacher-add-students/view-teacher-add-students.component';
import { RegisterComponent } from './views/register/view-register.component';
import { ProgressComponent } from './views/progress/view-progress.component';
import { CommonModule } from '@angular/common';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    /*
        headerName: 'Authorization',
        headerPrefix: 'bearer',
        tokenGetter: (() => localStorage.getItem(this.tokenName)),
        */
  }), http, options);
}
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
    TeacherSeeProgressComponent,
    TeacherAddStudentsComponent,
    RegisterComponent,
    ProgressComponent,
  ],
  imports: [
    AlertModule.forRoot(),
	  BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
     {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }
      ,LoginService, BackendService, AuthGuard
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
