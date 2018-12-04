import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { UtilsService } from './utils.service';

interface Auth {
  username: string;
  password: string;
}

@Injectable()

export class AuthService {

  constructor(
    private http: Http,
    private utils: UtilsService
  ) { }

  signup(formData: Auth): Observable<Response> {
    return this.http.post(
      this.utils.get_url('signup'),
      JSON.stringify(formData),
      { headers: this.utils.create_headers() });
  }

  login(formData: Auth): Observable<any>  {
/*
    let url_params = "username="+formData.username+"&"+
      "password="+formData.password;

    return this.http.post(
      this.utils.get_url('login?'+url_params),
      {}
    );
    */

    // Simulate when server is unavailable
    const object = {
      access_token: 'token',
      email: formData.username,
      fullname: 'User Name',
      role: 'admin',
      status: 200,
    };

    const result = JSON.stringify(object);

    return new Observable<any>(
      (subscriber: Subscriber<any>) => subscriber.next(result)
    );
  }
}
