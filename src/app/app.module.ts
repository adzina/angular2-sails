import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";
import {HttpClientModule} from '@angular/common/http';
import { HttpModule, Http, RequestOptions,ConnectionBackend } from '@angular/http';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { AuthGuard } from './common/auth.guard';
import { RoleGuard } from './common/role.guard';

import { LoginService } from './services/login.service';
import { BackendService } from './services/backend.service';
import { EmitterService} from './services/emitter.service';

import { LoginComponent } from './views/login/view-login.component';
import { DashboardComponent } from './views/dashboard/view-dashboard.component';
import { TeacherSeeAllLessonsComponent } from './views/teacher-see-all-lessons/view-teacher-see-all-lessons.component';
import { SidePanelGroupsComponent } from './bars/side-panel-groups/side-panel-groups.component';
import { ChooseModeComponent } from './views/choose-mode/view-choose-mode.component';
import { NavbarComponent } from './bars/navbar/navbar.component';
import { AdminCreateGroupComponent } from './views/admin-create-group/view-admin-create-group.component';
import { AdminAddUsersComponent } from './views/admin-add-users/view-admin-add-users.component';
import { GoodbyeComponent } from './views/goodbye/view-goodbye.component';
import { TeacherCreateLessonComponent } from './views/teacher-create-lesson/view-teacher-create-lesson.component';
import { TeacherWordsPanelComponent } from './views/teacher-words-panel/view-teacher-words-panel.component';
import { TeacherSeeProgressComponent } from './views/teacher-see-progress/view-teacher-see-progress.component';
import { TeacherAddStudentsComponent } from './views/teacher-add-students/view-teacher-add-students.component';
import { AdminRegisterComponent } from './views/admin-register/view-admin-register.component';
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
    SidePanelGroupsComponent,
    ChooseModeComponent,
    NavbarComponent,
    AdminCreateGroupComponent,
    AdminAddUsersComponent,
    GoodbyeComponent,
    TeacherSeeAllLessonsComponent,
    TeacherCreateLessonComponent,
    TeacherWordsPanelComponent,
    TeacherSeeProgressComponent,
    TeacherAddStudentsComponent,
    AdminRegisterComponent,
  ],
  imports: [
    AlertModule.forRoot(),
	  BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    FormsModule,
    Ng2CompleterModule,
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
      ,LoginService, BackendService, EmitterService, AuthGuard, RoleGuard
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
