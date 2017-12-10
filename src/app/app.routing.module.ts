import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/view-login.component';
import { DashboardComponent } from './views/dashboard/view-dashboard.component';
import { ChooseModeComponent } from './views/choose-mode/view-choose-mode.component';
import { GoodbyeComponent } from './views/goodbye/view-goodbye.component';
import { TeacherCreateLessonComponent } from './views/teacher-create-lesson/view-teacher-create-lesson.component';
import { AdminCreateGroupComponent } from './views/admin-create-group/view-admin-create-group.component';
import { AdminAddUsersComponent } from './views/admin-add-users/view-admin-add-users.component';
import { TeacherWordsPanelComponent } from './views/teacher-words-panel/view-teacher-words-panel.component';
import { TeacherAddStudentsComponent } from './views/teacher-add-students/view-teacher-add-students.component';
import { TeacherSeeProgressComponent } from './views/teacher-see-progress/view-teacher-see-progress.component';
import { AdminRegisterComponent } from './views/admin-register/view-admin-register.component';
import { TeacherSeeAllLessonsComponent} from './views/teacher-see-all-lessons/view-teacher-see-all-lessons.component';
import { AuthGuard } from './common/auth.guard';
import { RoleGuard } from './common/role.guard';

// Define the routes
export const routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: AdminRegisterComponent,
  //  canActivate: [RoleGuard],
    //data: {
      //expectedRole: 'admin'
    //}
  },

  {
    path: 'admin-create-group',
    component: AdminCreateGroupComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
      path: 'admin-add-users',
      component: AdminAddUsersComponent,
      canActivate: [RoleGuard],
      data: {
        expectedRole: 'admin'
      }
    },
    {
      path: 'see-all-lessons',
      component: TeacherSeeAllLessonsComponent,
      canActivate: [AuthGuard]
    },
  {
    path: 'teacher-words-panel',
    component: TeacherWordsPanelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teacher-create-lesson',
    component: TeacherCreateLessonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teacher-see-progress',
    component: TeacherSeeProgressComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teacher-add-students',
    component: TeacherAddStudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {  path: 'choose-mode',
    component: ChooseModeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'goodbye',
    component: GoodbyeComponent
  },
 { //Redirect urls not found at root
     path: '**',
     redirectTo: ''
   }
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
