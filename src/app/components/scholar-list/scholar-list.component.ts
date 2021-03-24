import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-scholar-list',
  templateUrl: './scholar-list.component.html',
  styleUrls: ['./scholar-list.component.css']
})
export class ScholarListComponent implements OnInit {
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
}
