import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';

const routes: Routes = [
    // { path: 'version', component: VersionComponent },
    { path: 'subject-list', component: SubjectListComponent },
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TeacherRoutingModule { }