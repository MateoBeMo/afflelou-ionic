import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class UtilsService {

    constructor(private http: Http) { }

    create_headers() {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return headers;
    }

    jwt() {
        // create authorization header with jwt
        const token = localStorage.getItem('auth_token');

        const headers = this.create_headers();
        headers.append('Authorization', 'Bearer ' + token);

        return new RequestOptions({ headers: headers });
    }

    basic_auth(username: string, password: string) {
        // create authorization header with basic auth
        const auth_string = btoa(username + ':' + password);

        const headers = this.create_headers();
        headers.append('Authorization', 'Basic ' + auth_string);

        return new RequestOptions({ headers: headers });
    }

    get_url(path) {
        return 'localhost/' + path;
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', JSON.parse(error._body)); // for demo purposes only
        return Promise.reject(JSON.parse(error._body).errors);
    }
}
