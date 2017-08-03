import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/view-login.component';
import { DashboardComponent } from './views/dashboard/view-dashboard.component';
import {ChooseModeComponent} from './views/choose-mode/view-choose-mode.component';
import {GoodbyeComponent} from './views/goodbye/view-goodbye.component';
import {TeacherPanelComponent} from './views/teacher-panel/view-teacher-panel.component';

/*
You can create a new view using these DOS commands:

cd /directory of my project
for example cd /SingleAppPage

cd /src/app/views
ng generate component viewPageNotFound
cls
dir
rename view-page-not-found page-not-found
cd /directory of my project

*/

//import { ViewPageNotFoundComponent } from './views/page-not-found/view-page-not-found.component';


// Define the routes
export const routes = [
  { //It associates the url / with the view ViewMainComponent
    path: '',
    data: ['Login'],
    component: LoginComponent
  },
  {
    path: 'teacher-panel',
    data: ['Teacher Panel'],
    component: TeacherPanelComponent
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
