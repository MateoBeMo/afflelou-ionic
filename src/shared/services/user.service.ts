import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(authToken) {
    localStorage.setItem('auth_token', authToken);
    this.loggedIn = true;
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}

