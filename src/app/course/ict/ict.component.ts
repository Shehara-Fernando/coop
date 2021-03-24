import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IctServiceService } from 'src/app/services/ict-service.service';
import { Course } from 'src/app/models/course.model';
@Component({
  selector: 'app-ict',
  templateUrl: './ict.component.html',
  styleUrls: ['./ict.component.css']
})
export class IctComponent implements OnInit {
 public ictForm:FormGroup;
 Course:Course = new Course;
  constructor( private fb:FormBuilder,
    private ictServices:IctServiceService) { }

  ngOnInit() {
    this.setForm();
  }
  setForm(){
    this.ictForm = this.fb.group({
      idCtrl:[null],
      coursenameCtrl: [null],
      contentCtrl: [null],
     


    })
  }
  save(Course){
    this.ictServices.saveIct(Course).subscribe((data: any) => {
     
    });
  }

}
