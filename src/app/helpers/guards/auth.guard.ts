import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
    private _router: Router,
    private toastr: ToastrService) {


  }
  canActivate(): boolean {
    if (localStorage.getItem('user')) { // if not login 
      let user = JSON.parse(localStorage.getItem('user'));// storing the values of the logged users

      if (user.clientRole == 1) { // checking whether the user role is matched to the defined roles

        return true;

      } else {
        this._router.navigate(['/login']);// navigating to the login page indicating an error message 
        this.toastr.error("Access Denied")
        return false;
      }
    } else {
      this._router.navigate(['/login']);
      this.toastr.error("Please Login")
      return false;
    }






  }

}
