import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IctComponent } from './ict/ict.component';
const routes: Routes = [
  // { path: 'version', component: VersionComponent },
  { path: 'ict', component: IctComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
