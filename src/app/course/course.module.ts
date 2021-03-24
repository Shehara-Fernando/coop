import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IctComponent } from './ict/ict.component';

import { CourseRoutingModule } from './course-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IctComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CourseModule { }
