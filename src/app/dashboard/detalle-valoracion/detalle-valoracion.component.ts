import { Component, OnInit, Inject } from '@angular/core';
import { RespuestaService } from '../../../shared/services/respuesta.service';
import { ResultadoQuiz } from '../../interfaces/resultado-quiz';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Respuesta } from '../../interfaces/respuesta';
import { NavbarComponent } from '../../dashboard/navbar/navbar.component';

@Component({
  selector: 'app-detalle-valoracion',
  templateUrl: './detalle-valoracion.component.html',
  styleUrls: ['./detalle-valoracion.component.scss']
})
export class DetalleValoracionComponent implements OnInit {

  resultado: ResultadoQuiz;
  respuestas: Respuesta[];

  constructor(private respuestaService: RespuestaService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params
    .pipe((params: Params) => this.respuestaService.getResultado(+params['id']))
    .subscribe((data: any) => { this.resultado = data; this.resultado = data;
      this.respuestas = data.respuestas.filter( r => r.valoracion === 'Negativa'); });
  }
  visto(): void {
    this.respuestaService.visto( this.resultado );
  }
}
