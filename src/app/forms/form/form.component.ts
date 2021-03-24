import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public validateFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();// form set 
  }
  // setting the values to the form 
  setForm() {
    this.validateFormGroup = this.fb.group({
      usernameCtrl: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern('[a-zA-Z ]*')])],
      passwordCtrl: [null, Validators.required],
      telephoneCtrl: [],
      emailCtrl: [],
      addressCtrl: [],
      cityCtrl: [],
      categoryCtrl:[],
      commentCtrl:[]

    })
  }



  save() {   
    
    // alert(this.validateFormGroup.controls['usernameCtrl'].value);
    // alert(this.validateFormGroup.controls['passwordCtrl'].value);
    // alert(this.validateFormGroup.controls['telephoneCtrl'].value);
    // alert(this.validateFormGroup.controls['emailCtrl'].value);
    // alert(this.validateFormGroup.controls['addressCtrl'].value);
    // alert(this.validateFormGroup.controls['cityCtrl'].value);
    console.log(this.validateFormGroup.controls['usernameCtrl'].value);
    

  }


}
