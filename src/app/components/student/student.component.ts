import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private subscription: Subscription;
  public studentFormGroup: FormGroup;

  public isGender: number = 0;// Male = 0,Female = 1;
  public isEdit: boolean = false;

  constructor(private fb: FormBuilder,
    private studentService: StudentService,
    private _route: ActivatedRoute,
    private _router: Router,
    private datePipe: DatePipe) { }
  /**
   *  when running the form this method is automatically call when the component is loaded
   */
  ngOnInit() {
    this.setForm();
    this.editSetForm();
  }
  /**
   * 
   */
  setForm() {
    this.studentFormGroup = this.fb.group({
      studentIdCtrl: [null],
      studentNameCtrl: [null, Validators.required],
      ageCtrl: [null, Validators.required],
      genderCtrl: [null],
      genderCtrl1: [null],
      rankCtrl: [null],
      dateCtrl: [null],
    })
  }
  /**
   * 
   */
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
  /**
   * 
   */
  save() {
    let name = this.studentFormGroup.controls['studentNameCtrl'].value;
    let age = this.studentFormGroup.controls['ageCtrl'].value;
    let gender = this.isGender;
    let rank = this.studentFormGroup.controls['rankCtrl'].value;
    let date = this.studentFormGroup.controls['dateCtrl'].value;
    const studentObject = {
      'studentName': name,
      'studentAge': age,
      'gender': gender,
      'rank': rank,
      'dob': date,
    };
    this.studentService.saveStudent(studentObject).subscribe((data: any) => {
      this._router.navigateByUrl('student-list');
    });
  };
  /**
   * 
   * @param id
   */
  getStudentById(id): void {
    this.studentService.getStudentsById(id).subscribe((data: any) => {
      this.studentFormGroup.controls.studentIdCtrl.setValue(data.studentId);
      this.studentFormGroup.controls.studentNameCtrl.setValue(data.studentName);
      this.studentFormGroup.controls.ageCtrl.setValue(data.studentAge);
      this.studentFormGroup.controls.rankCtrl.setValue(data.rank);
      if (data.gender == 0) {
        this.isGender = 0;
      }
      if (data.gender == 1) {
        this.isGender = 1;
      }
      let date = new Date(data.dob);
      let s = this.datePipe.transform(date, 'yyyy-MM-dd');
      this.studentFormGroup.controls.dateCtrl.setValue(s);
    })
  };
  /**
   * 
   */
  update(): void {
    let gender = this.isGender;
    let id = this.studentFormGroup.controls['studentIdCtrl'].value;
    let name = this.studentFormGroup.controls['studentNameCtrl'].value;
    let age = this.studentFormGroup.controls['ageCtrl'].value;
    let rank = this.studentFormGroup.controls['rankCtrl'].value;
    let date = this.studentFormGroup.controls['dateCtrl'].value;
    const ListObject = {
      'studentId': id,
      'studentName': name,
      'studentAge': age,
      'gender': gender,
      'rank': rank,
      'dob': date,
    }
    this.studentService.updateStudent(ListObject).subscribe((data: any) => {
      this._router.navigateByUrl('student-list');
    });
  };
  /**
   * 
   * @param gender 
   */
  changeGender(gender: number) {
    this.isGender = gender;
  };
}