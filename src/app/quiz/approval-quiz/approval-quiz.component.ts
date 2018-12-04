import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../../shared/interfaces/employee';
import { EmployeeService } from '../../../shared/services/employee.service';
import { RespuestaService } from '../../../shared/services/respuesta.service';

@Component({
  selector: 'app-approval-quiz',
  templateUrl: './approval-quiz.component.html',
  styleUrls: ['./approval-quiz.component.scss']
})
export class ApprovalQuizComponent implements OnInit {

  @Output() finish = new EventEmitter();


  optometrista = '';
  vendedor = '';
  entregaGafa = '';
  numeroVenta = '';

  employees: Employee[];

  constructor(private router: Router, private employeeSerivice: EmployeeService, private respuestaService: RespuestaService) { }

  ngOnInit() {
    this.getEmployees();
  }
  siguiente(): void {
    this.respuestaService.upload1(this.vendedor, this.optometrista, this.entregaGafa, this.numeroVenta);
    this.router.navigate(['quiz/start-quiz']);
  }
  getEmployees(): void {
    this.employees = this.employeeSerivice.getEmployee();
  }
  goHome(): void {
    this.router.navigate(['quiz/']);
  }
}
