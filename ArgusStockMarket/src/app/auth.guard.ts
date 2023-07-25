import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BackService } from './sl.service';

@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private router: Router, private auth:BackService) {}

  canActivate(): boolean
  {
      if (this.auth.isLoggedin()) {
        return true;
      } 
      this.router.navigateByUrl("/signup")
      return false;
  }
}


export const authGuard: CanActivateFn = () => {
  return inject(PermissionsService).canActivate()
};
