import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public press: boolean;

  constructor(fb: FormBuilder, private auth: AuthService, private userService: UserService, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }
  public onSubmit(values: any): void {

    if (this.form.valid) {
      // console.log('FORM VALID');
      this.auth.login({
        username: values.email,
        password: values.password,
      }).subscribe(res => {
        this.userService.login(res);
      /*  if (res.status === 200) {
          let body = JSON.parse(res.text());
          console.log(body);
          this.userService.login(
            body.access_token
          );*/
          this.router.navigate(['dashboard']);
       // }
      });
    }
  }


}
