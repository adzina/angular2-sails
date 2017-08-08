import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/view-login.component';
import { DashboardComponent } from './views/dashboard/view-dashboard.component';
import {ChooseModeComponent} from './views/choose-mode/view-choose-mode.component';
import {GoodbyeComponent} from './views/goodbye/view-goodbye.component';
import {TeacherWordsPanelComponent} from './views/teacher-words-panel/view-teacher-words-panel.component';
import {TeacherDashboardComponent} from './views/teacher-dashboard/view-teacher-dashboard.component';
import {TeacherAddStudentsComponent} from './views/teacher-add-students/view-teacher-add-students.component';
import { RegisterComponent } from './views/register/view-register.component';
import { ProgressComponent } from './views/progress/view-progress.component';


// Define the routes
export const routes = [
  {
    path: '',
    data: ['Login'],
    component: LoginComponent
  },
  {
    path: 'register',
    data: ['Register'],
    component: RegisterComponent
  },
  {
    path: 'teacher-words-panel',
    data: ['Teacher words panel'],
    component: TeacherWordsPanelComponent
  },
  {
      path: 'teacher-dashboard',
      data: ['Teacher\'s dashboard'],
      component: TeacherDashboardComponent
  },
  {
    path: 'teacher-add-students',
    data: ['Teacher add students'],
    component: TeacherAddStudentsComponent
  },
  { //It associates the url /employee with the view ViewEmployeeComponent
    path: 'dashboard',
    data: ['Dashboard'],
    component: DashboardComponent
  },
  {  path: 'choose-mode',
    data: ['Choose Mode'],
    component: ChooseModeComponent
  },
  {
    path: 'progress',
    data: ['Progress'],
    component: ProgressComponent
  },
  {
    path: 'goodbye',
    data: ['Goodbye'],
    component: GoodbyeComponent
  },
  { //Redirect urls not found at root
    path: '**',
    redirectTo: '/'
  }
  //It would be best to create a page dedicated to this work
  //	{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    //RouterModule.forRoot(appRoutes)
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
