import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ClientservicesService } from 'src/app/services/clientservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {
  public clientForm :FormGroup;
  user:any = {};
 

  private sub: Subscription;
  public isGender: number = 0;// Male = 0,Female = 1;
  public isEdit: boolean = false;
  constructor(private fb:FormBuilder,
    private clientService: ClientservicesService,
    private _route: ActivatedRoute,
    private _router: Router,
    private toastr:ToastrService,
    ) { }

  ngOnInit() {
    this.setForm();
    this.addStorage();
    this.OnSubmit();
    this.sub = this._route.paramMap.subscribe(
      params => {
        const id = +params.get('id');

        if (id) {
          this.getClientsbyId(id);
          this.isEdit = true;
        } else {
          this.isEdit = false;
        }
      }
    );
  }
  /**
   * setting the form values
   */
  setForm(){
    this.clientForm = this.fb.group({
      clientIdCtrl:[null],
      firstNameCtrl:[null,Validators.required],
      lastNameCtrl:[null,Validators.required],
      emailCtrl:[null,Validators.required],
      numberCtrl:[null,Validators.required],
      passwordCtrl:[null,Validators.required],
      conPasswordCtrl:[null,Validators.required],
      
      countryCtrl:[null,Validators.required]
    })
  }
  save(){
    let fistName =this.clientForm.controls['firstNameCtrl'].value;
    let lastName =this.clientForm.controls['lastNameCtrl'].value;
    let email =this.clientForm.controls['emailCtrl'].value;
    let number = this.clientForm.controls['numberCtrl'].value;
    let password = this.clientForm.controls['passwordCtrl'].value;
    let conpassword = this.clientForm.controls['conPasswordCtrl'].value;
    let gender = this.isGender;
    let country = this.clientForm.controls['countryCtrl'].value;
 
    const clientObject = {
      'clientFirstName' : fistName,
      'clientLastName' : lastName,
      'clientEmail' :email,
      'clientTp':number,
      'clientPassword':password,
      'clientConPassword':conpassword,
      'clientGender':gender,
      'clientCountry':country,
    }
    
    this.clientService.saveClient(clientObject).subscribe((data: any) => {
      this.toastr.success('Sucessfully added')
      this._router.navigateByUrl('client-list');
 
    });
  }
  addStorage(){
    this.user  = Object.assign(this.user,this.clientForm.value);
    // localStorage.setItem('Users',JSON.stringify(this.user));
    // this.addUser(this.user);

  }
  // addUser(user){
  //   let users = [];

  //   if(localStorage.getItem('Users')){
  //     users = JSON.parse(localStorage.getItem('Users'));
  //     users = [user, ...users];
  //   }else{
  //     users = [user];
  //   }
  //    localStorage.setItem('Users',JSON.stringify(users));
  // }

  OnSubmit(){
    this.user = Object.assign(this.user, this.clientForm.value);
    // localStorage.setItem('Users',JSON.stringify(this.user));
    this.AddUser(this.user);
    
  }

  AddUser(user){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users'));
      users = [user, ...users];
    }
  else{
    users = [user];
  }
   localStorage.setItem('Users',JSON.stringify(users));
}
  retrieveStorage(){
    let user =   JSON.parse(localStorage.getItem('Users'));
    this.clientForm.controls.clientIdCtrl.setValue(user[0].clientIdCtrl);
      this.clientForm.controls.firstNameCtrl.setValue(user[0].firstNameCtrl);
      this.clientForm.controls.lastNameCtrl.setValue(user[0].lastNameCtrl);
      this.clientForm.controls.emailCtrl.setValue(user[0].emailCtrl);
      this.clientForm.controls.numberCtrl.setValue(user[0].numberCtrl);
      this.clientForm.controls.passwordCtrl.setValue(user[0].passwordCtrl);
      // const currentDate = new Date(data.dob);
      this.clientForm.controls.conPasswordCtrl.setValue(user[0].conPasswordCtrl);
      this.clientForm.controls.countryCtrl.setValue(user[0].countryCtrl);
    
  }
  /**
   * 
   * @param id id which we bring from the db 
   */
  getClientsbyId(id):void{
    this.clientService.getClientsById(id).subscribe((data: any) => {
      
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
     
     
      
    })

  }
  /**
   * 
   * @param clientGender database name 
   *  click function for the radio buttos
   */
  changeGender(clientGender: number) {
    this.isGender = clientGender;
  }
  /**
   * update 
   */
  update():void{
    let id = this.clientForm.controls['clientIdCtrl'].value;
    let fistName =this.clientForm.controls['firstNameCtrl'].value;
    let lastName =this.clientForm.controls['lastNameCtrl'].value;
    let email =this.clientForm.controls['emailCtrl'].value;
    let number = this.clientForm.controls['numberCtrl'].value;
    let password = this.clientForm.controls['passwordCtrl'].value;
    let conpassword = this.clientForm.controls['conPasswordCtrl'].value;
    let gender = this.isGender;
    let country = this.clientForm.controls['countryCtrl'].value;
    const listObject = {
      'clientId':id,
      'clientFirstName' : fistName,
      'clientLastName' : lastName,
      'clientEmail' :email,
      'clientTp':number,
      'clientPassword':password,
      'clientConPassword':conpassword,
      'clientGender':gender,
      'clientCountry':country,
    }
    this.clientService.updateClient(listObject).subscribe((data: any) => {
      this.toastr.success('Sucessfully updated')
      this._router.navigateByUrl('client-list');
    });

  };

}
