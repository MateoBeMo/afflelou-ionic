import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';
import { LanguageStadistics } from '../interfaces/language-stadistics';

@Injectable()
export class StadisticsService {

  stadistic: LanguageStadistics ;
  private resource_name = 'language-stadistics';
  constructor(private http: HttpClient) {
  }

  getLanguagesData(): Observable<LanguageStadistics[]> {
    return this.http.get<LanguageStadistics[]>(`${environment.base_url}/${this.resource_name}`);
  }
  addLanguage(e): Observable<LanguageStadistics> {
    this.stadistic = {id: null, language: e, total: 0};
    return this.http.post<LanguageStadistics>('http://localhost:3000/language-stadistics', this.stadistic, {
      headers: new HttpHeaders().set('Content-Type', 'application/json' ) });
  }
}
