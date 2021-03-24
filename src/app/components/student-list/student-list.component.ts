import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList;

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.getStudents();
    
  }

  getStudents(){
    this.studentService.getStudents().subscribe((data: any) => {
      this.studentList = data.object;      
    });
  }
  deleteStudent(studentId){
    this.studentService.deleteStudent(studentId).subscribe((data: any) => {
      this.getStudents();
    });
    
  }
  getStudent(studentId){
    this.studentService.getStudentsById(studentId).subscribe((data: any) => {
      this.getStudents();
    });

  }

}
