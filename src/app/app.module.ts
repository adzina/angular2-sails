import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { EmployeeService } from './services/employee.service';
import { LoginComponent } from './views/login/view-login.component';
import {LoginService} from './services/login.service';
import { DashboardComponent } from './views/dashboard/view-dashboard.component';
import { SidePanelLessonsComponent } from './bars/side-panel-lessons/side-panel-lessons.component';
import { ChooseModeComponent } from './views/choose-mode/view-choose-mode.component';
import { NavbarComponent } from './bars/navbar/navbar.component';
import { GoodbyeComponent } from './views/goodbye/view-goodbye.component';
import { TeacherPanelComponent } from './views/teacher-panel/view-teacher-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidePanelLessonsComponent,
    ChooseModeComponent,
    NavbarComponent,
    GoodbyeComponent,
    TeacherPanelComponent,
  ],
  imports: [
    AlertModule.forRoot(),
	  BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule //http://www.concretepage.com/angular-2/angular-2-http-post-example
  ],
  providers: [EmployeeService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
