import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentComponent } from './components/student/student.component';
import { FormComponent } from './forms/form/form.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ScholarComponent } from './components/scholar/scholar.component';
import { ScholarListComponent } from './components/scholar-list/scholar-list.component';
import { LoginComponent } from './components/login/login.component';
import { ProductRegisterComponent } from './components/product-register/product-register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuard } from './helpers/guards/auth.guard';



const routes: Routes = [
  {  
    path: 'student', component: StudentComponent
  },
  {  
    path: 'login', component: LoginComponent
  },
  {  
    path: 'products', component: ProductRegisterComponent
  },
  {  
    path: 'product-list', component: ProductListComponent
  },
  {
    path: 'product-list/:id/edit', component: ProductRegisterComponent 
 },
  {
    path: 'form', component:FormComponent

  },
  {
    path: 'student-list', component:StudentListComponent

  },
  {
     path: 'student/:id/edit', component: StudentComponent 
  },
  {
    path: 'client', component: ClientRegisterComponent 
 },
 {
  path: 'client-list', component: ClientListComponent 
},
{
  path: 'client/:id/edit', component: ClientRegisterComponent 
},
{
  path: 'scholar', component: ScholarComponent 
},
{
  path: 'scholar/:id/edit', component: ScholarComponent 
},
{
  path: 'scholar-list', component: ScholarListComponent 
},
{
  path: 'users',
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
},
{
  path: 'teacher',
  loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule),
  canActivate: [AuthGuard]
},
{
  path: 'course',
  loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
