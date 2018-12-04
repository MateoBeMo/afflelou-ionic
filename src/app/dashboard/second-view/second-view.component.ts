import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Customer } from '../../../shared/interfaces/customer';
import { CustomerService } from '../../../shared/services/customer.service';
import { RespuestaService } from '../../../shared/services/respuesta.service';

// import { ViewEncapsulation } from '@angular/compiler/src/core';



@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SecondViewComponent implements OnInit {

  rows = [];
  temp = [];
  loadingIndicator = true;
  reorderable = true;
  search: string;



  columns = [
    { name: 'Numero Venta' },
    { name: 'Vendedor' },
    { name: 'Optometrista' },
    { name: 'Entrega Gafa' },
    { name: 'Fecha' },
  ];



  show: boolean;
  customers: Customer[];

  constructor(private customerService:  CustomerService, private respuestaService: RespuestaService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.respuestaService.getResultados().subscribe(data => {
      this.temp = [...data];
      this.rows = data; // cache our list
    });
  }

  updateFilter(event: string) {
    const val = event.toLowerCase();

    // filter our data
    const temp = this.temp.filter(d => {
      return String(d.numeroVenta).toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }


}
