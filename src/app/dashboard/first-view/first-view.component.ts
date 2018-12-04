import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguageStadistics } from '../../../shared/interfaces/language-stadistics';
import { StadisticsService } from '../../../shared/services/stadistics.service';
import { RespuestaService } from '../../../shared/services/respuesta.service';
import { ResultadoQuiz } from '../../interfaces/resultado-quiz';
import { Respuesta } from '../../interfaces/respuesta';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.scss']
})
export class FirstViewComponent implements OnInit {
  closeResult: string;

  pchartColors: any[] = [
    {
      backgroundColor: ['#C3A269', '#A7AAAC'],
    }];

    barChartColor: any[] = [
          { // indigo
          backgroundColor: '#C3A269'
          },
          { // red
          backgroundColor: '#A7AAAC'
          },
          { // green
          backgroundColor: 'green'
          }];

  resultados: ResultadoQuiz[] = [];
  pieChartLabels: string[] = ['Resutlados positivos', 'Resultados negativos'];
  pieChartData: number[];
  malas = 0;
  buenas = 0;
  resultadosNegativos: ResultadoQuiz[] = [];
  resultadosPositivos: ResultadoQuiz[] = [];


  barChartLabels: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData: any[];

  constructor(private respuestaService: RespuestaService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getData();
    this.getResultadosNegativos();
    this.getResultadosPositivos();
  }
  getData(): void {
    const variable: number[] = [];
    this.respuestaService.getResultados().subscribe(data => {
      this.resultados = data;
      this.resultados.forEach(r => { r.respuestas.forEach( res => {
        if (res.idRespuesta === 1055 || res.idRespuesta === 1056 || res.idRespuesta === 1057) {
        this.malas++;
      } else {
        this.buenas++;
      }
    });
  });
      variable.push(this.buenas, this.malas);
      this.pieChartData = variable;
      this.getBarData();
    });

  }
  getBarData(): void {
    const dataBuenas: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const dataMalas: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.resultados.forEach( r => {
      const mes = r.fecha.toString().split('/');
      switch (mes[1]) {
        case '1':
          r.respuestas.forEach( res => {
            if ( res.valoracion === 'Positiva') {
              dataBuenas[0]++;
            } else {
            dataMalas[0]++;
            }
          });
          break;
        case '2':
        r.respuestas.forEach( res => {
          if ( res.valoracion === 'Positiva') {
            dataBuenas[1]++;
          } else {
          dataMalas[1]++;
          }
        });
         break;
        case '3':
        r.respuestas.forEach( res => {
          if ( res.valoracion === 'Positiva') {
            dataBuenas[2]++;
          } else {
          dataMalas[2]++;
          }
        });
       break;
        case '4':
        r.respuestas.forEach( res => {
          if ( res.valoracion === 'Positiva') {
            dataBuenas[3]++;
          } else {
          dataMalas[3]++;
          }
        });
       break;
        case '5':
        r.respuestas.forEach( res => {
          if ( res.valoracion === 'Positiva') {
            dataBuenas[4]++;
          } else {
          dataMalas[4]++;
          }
        });
       break;
        case '6':
        r.respuestas.forEach( res => {
          if ( res.valoracion === 'Positiva') {
            dataBuenas[5]++;
          } else {
          dataMalas[5]++;
          }
        });
       break;
        case '7':
        r.respuestas.forEach( res => {
          if ( res.valoracion === 'Positiva') {
            dataBuenas[6]++;
          } else {
          dataMalas[6]++;
          }
        });
       break;
        case '8':
        r.respuestas.forEach( res => {
          if ( res.valoracion === 'Positiva') {
            dataBuenas[7]++;
          } else {
          dataMalas[7]++;
          }
        });
       break;
        case '9':
        r.respuestas.forEach( res => {
          if ( res.valoracion === 'Positiva') {
            dataBuenas[8]++;
          } else {
          dataMalas[8]++;
          }
        });
       break;
        case '10':
        r.respuestas.forEach( res => {
          if ( res.valoracion === 'Positiva') {
            dataBuenas[9]++;
          } else {
          dataMalas[9]++;
          }
        });
       break;
        case '11':
        r.respuestas.forEach( res => {
          if ( res.valoracion === 'Positiva') {
            dataBuenas[10]++;
          } else {
          dataMalas[10]++;
          }
        });
       break;
        case '12':
        r.respuestas.forEach( res => {
          if ( res.valoracion === 'Positiva') {
            dataBuenas[11]++;
          } else {
          dataMalas[11]++;
          }
        });
       break;
      }
    });
    this.barChartData = [
      {data: dataBuenas, label: 'Resultados Positivos'},
      {data: dataMalas, label: 'Resultados Negativos'}
    ];
  }
  getResultadosNegativos(): void {
    this.respuestaService.getResultadosNegativos().subscribe(data => {
      this.resultadosNegativos = data;
    });
  }
  getResultadosPositivos(): void {
    this.respuestaService.getResultadosPositivos().subscribe(data => {
      this.resultadosPositivos = data;
      this.resultadosPositivos = this.resultadosPositivos.filter( r => r.respuestas.every( res => res.valoracion === 'Positiva'));
    });

  }

  onClickChart(e) {
    if (e.active[0]._index === 1) {
      this.open('Negativos');
      // console.log("negativos")
    } else {
      this.open('Totalmente Positivos');
      // console.log("positivos");
    }

  }
  open(tipo: string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.tipo = tipo;
    if ( tipo === 'Negativos') {
      modalRef.componentInstance.resultadosNegativos = this.resultadosNegativos;
    } else {
      modalRef.componentInstance.resultadosPositivos = this.resultadosPositivos;
    }

  }
}
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Resultados {{tipo}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <ul *ngIf="tipo === 'Negativos'" class="modal-body" style="margin-left: 2.5em;">
      <li *ngFor="let resultado of resultadosNegativos">
       <a [routerLink]="['dashboard/detalle-valoracion', resultado.id]" (click)="activeModal.close('Close click')" > Número de venta: {{resultado.numeroVenta}} </a>
      </li>
      </ul>
    <ul *ngIf="tipo === 'Totalmente Positivos'" class="modal-body">
      <li *ngFor="let resultado of resultadosPositivos" >
       <a [routerLink]="['dashboard/detalle-valoracion', resultado.id]" (click)="activeModal.close('Close click')" > Número de venta: {{resultado.numeroVenta}} </a>
      </li>
    </ul>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;
  @Input() tipo;

  constructor(public activeModal: NgbActiveModal) { }
}
