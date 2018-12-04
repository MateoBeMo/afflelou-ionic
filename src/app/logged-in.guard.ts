// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../shared/services/user.service';


@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate() {

    if ( this.user.isLoggedIn() ) {
      return this.user.isLoggedIn();
    } else {
      // start a new navigation to redirect to login page
      this.router.navigate(['/login']);
      // abort current navigation
      return false;
    }

  }
  canDeactivate() {
    return this.user.isLoggedIn();
  }
  canActivateChild() {
    return this.user.isLoggedIn();
  }
}
