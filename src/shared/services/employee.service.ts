import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EmployeeService {
  employee: Employee[] = [
    {id: 1, name: 'Noelia', surname: '' },
    {id: 1, name: 'Rocio', surname: '' },
    {id: 1, name: 'Lorena', surname: '' },
    {id: 1, name: 'Mª José', surname: '' },
    {id: 1, name: 'Beatriz', surname: '' },
    {id: 1, name: 'Luis', surname: '' },
    {id: 1, name: 'Empleado 1', surname: '' },
    {id: 1, name: 'Empleado 2', surname: '' },
  ];
  private resource_name = 'employees';
  // Noelia, Rocio, Lorena, Mª José, Beatriz, Luis, Empleado 1 y Empleado 2
  constructor(private http: HttpClient) { }
  // getEmployee(): Observable<Employee[]> {
  //    return this.http.get<Employee[]>(`${environment.base_url}/${this.resource_name}`);
  // }
  getEmployee(): Employee[] {
    return this.employee;
  }
}
