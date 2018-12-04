import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  constructor(private httpClient: HttpClient, private http: Http ) { }

  get(url: string) {
    return this.http.get(url).map(res => res.text().length > 0 ? res.json() : null);
  }
  upload(e){
    console.log("entraaaa"+ e);
    const respuesta = this.httpClient.post(' http://localhost:3000/questions',e).subscribe();
  }

  getAll() {
    return [
      { id: 'assets/quiz.json', name: 'Pruebaaa' },
    ];
  }

}
