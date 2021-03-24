import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;



  constructor(private fb: FormBuilder,
    private AuthService: AuthService,
    private _route: ActivatedRoute,
    private _router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.setForm();
  }
  setForm() {
    this.loginForm = this.fb.group({
      userNameCtrl: [null, Validators.required],
      passwordCtrl: [null, Validators.required],

    })

  }
  OnSubmit() {
    let userName = this.loginForm.controls['userNameCtrl'].value;
    let password = this.loginForm.controls['passwordCtrl'].value;
    const loginObject = {
      'clientEmail': userName,
      'clientPassword': password,
    }
    this.AuthService.login(loginObject).subscribe((data: any) => {

      if (data) {
        this.toastr.success('Welcome ' + data.clientFirstName + data.clientLastName)
        localStorage.setItem('user', JSON.stringify(data));
        this._router.navigateByUrl('client-list');
      } else {
        this.toastr.error('Invalid Credentials', 'Error!')
      }


    });

    //   this._router.navigateByUrl('client-list');
    // } else {
    //   alert("invalid username or password")
    //   this._router.navigateByUrl('login');
    // }
  }


}
