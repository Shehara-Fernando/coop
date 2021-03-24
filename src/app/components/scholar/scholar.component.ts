import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-scholar',
  templateUrl: './scholar.component.html',
  styleUrls: ['./scholar.component.css']
})
export class ScholarComponent implements OnInit {
  public studentFormGroup: FormGroup;
  public isEdit: boolean = false;
  private subscription: Subscription;
  /**student object */
  student: Student = new Student();

  constructor(private fb: FormBuilder,
    private studentService: StudentService,
    private _route: ActivatedRoute,
    private _router: Router,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.editSetForm();
  }
  save(student) {
    this.studentService.saveStudent(student).subscribe((data: any) => {
      this._router.navigateByUrl('scholar-list');
    });

  }
  update(student) {
    this.studentService.updateStudent(student).subscribe((data: any) => {
      this._router.navigateByUrl('scholar-list');
    });
  }
  editSetForm() {
    this.subscription = this._route.paramMap.subscribe(params => {
      const id = +params.get('id');
      if (id) {
        this.getStudentById(id);
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
    }
    );
  };
  getStudentById(id): void {
    this.studentService.getStudentsById(id).subscribe((data: any) => {
      this.student = data
      let date = new Date(data.dob);
      let s = this.datePipe.transform(date, 'yyyy-MM-dd');
      this.student.dob = s
    })

  }


}
