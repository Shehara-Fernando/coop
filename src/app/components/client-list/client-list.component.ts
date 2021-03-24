import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientservicesService } from 'src/app/services/clientservices.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  public clientForm: FormGroup;
  public isGender: number = 0;// Male = 0,Female = 1;
  clientList;
  constructor(private clientServices: ClientservicesService,
    private toastr: ToastrService, private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getStudents();
    this.setForm();


  }
  setForm() {
    this.clientForm = this.fb.group({
      clientIdCtrl: [null],
      firstNameCtrl: [null, Validators.required],
      lastNameCtrl: [null, Validators.required],
      emailCtrl: [null, Validators.required],
      numberCtrl: [null, Validators.required],
      passwordCtrl: [null, Validators.required],
      conPasswordCtrl: [null, Validators.required],


      countryCtrl: [null, Validators.required]
    })
  }
  getStudents() {
    this.clientServices.getClients().subscribe((data: any) => {
      this.clientList = data.object;
    });


  }
  deleteClient(id) {
    this.clientServices.deleteClient(id).subscribe((data: any) => {
      this.toastr.warning("A record has being deleted")
      this.getStudents();
    });
  }
  open(id) {
    this.clientServices.getClientsById(id).subscribe((data: any) => {
      this.clientForm.controls.clientIdCtrl.setValue(data.clientId);
      this.clientForm.controls.firstNameCtrl.setValue(data.clientFirstName);
      this.clientForm.controls.lastNameCtrl.setValue(data.clientLastName);
      this.clientForm.controls.emailCtrl.setValue(data.clientEmail);
      this.clientForm.controls.numberCtrl.setValue(data.clientTp);
      this.clientForm.controls.passwordCtrl.setValue(data.clientPassword);
      // const currentDate = new Date(data.dob);
      this.clientForm.controls.conPasswordCtrl.setValue(data.clientConPassword);
      /**setting the values for the radio button */

      if (data.clientGender == 0) {
        this.isGender = 0;
      }
      if (data.clientGender == 1) {
        this.isGender = 1;
      }
      this.clientForm.controls.countryCtrl.setValue(data.clientCountry);

    });
  }

}
