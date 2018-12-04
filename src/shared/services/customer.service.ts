import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';
import { Customer } from '../interfaces/customer';

@Injectable()
export class CustomerService {

  customers: Customer;
  private resource_name = 'customers';
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.base_url}/${this.resource_name}`);
  }
}
