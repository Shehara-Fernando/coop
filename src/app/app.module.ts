import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './forms/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './components/student/student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { DatePipe } from '@angular/common';
import { ScholarComponent } from './components/scholar/scholar.component';
import { ScholarListComponent } from './components/scholar-list/scholar-list.component';
import { TeacherModule } from './teacher/teacher.module';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material';
import { ProductRegisterComponent } from './components/product-register/product-register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CourseModule } from './course/course.module';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StudentComponent,
    StudentListComponent,
    ClientRegisterComponent,
    ClientListComponent,
    ScholarComponent,
    ScholarListComponent,
    LoginComponent,
    ProductRegisterComponent,
    ProductListComponent,
    OrderComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
   
    ToastrModule.forRoot({
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TeacherModule,
    UsersModule,
    CourseModule,
    NgbModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
