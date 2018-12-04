import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ResultadoQuiz } from '../../app/interfaces/resultado-quiz';
import { Respuesta } from '../../app/interfaces/respuesta';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class RespuestaService {

  public updateUserStatus: Subject<boolean> = new Subject();

resultado: ResultadoQuiz = {
    id: undefined,
    fecha: undefined,
    vendedor: "string",
    optometrista: "string",
    entregaGafa: "string",
    numeroVenta: "string",
    respuestas: [   
    { 
        id: undefined,
        idPregunta: 0,
        namePregunta: "string",
        idRespuesta: 0,
        nameRespuesta: "string",
        valoracion: "string",
        visto: undefined
    }
    ],
};

public seleccionado: Boolean = false;
   

  constructor(private httpClient: HttpClient, private http: Http,  private router: Router ) { }

  upload1(a,b,c,d){
    this.resultado.vendedor = a;
    this.resultado.optometrista = b;
    this.resultado.entregaGafa = c;
    this.resultado.numeroVenta = d;
    this.seleccionado = true;
  }
  upload2(e,f){
      this.resultado.fecha = e;
      this.resultado.respuestas = f;
      // console.log(this.resultado);
      this.httpClient.post('http://localhost:3000/resultados',this.resultado).subscribe();
      this.seleccionado = false;
  }


  getResultados(): Observable<ResultadoQuiz[]> {
    return this.httpClient.get<ResultadoQuiz[]>('http://localhost:3000/resultados');
  }

  getResultadosNegativos(): Observable<ResultadoQuiz[]> {
    return this.httpClient.get<ResultadoQuiz[]>('http://localhost:3000/resultados?q=Negativa');
  }
  getResultadosPositivos(): Observable<ResultadoQuiz[]> {
    return this.httpClient.get<ResultadoQuiz[]>('http://localhost:3000/resultados?q=Positiva');
  }
  getResultado(id): Observable<ResultadoQuiz> {
    return this.httpClient.get<ResultadoQuiz>('http://localhost:3000/resultados/'+id);
  }
  visto (res: ResultadoQuiz ): void {
    this.updateUserStatus.next();
    res.respuestas.map( res => res.visto = true);
    this.httpClient.put('http://localhost:3000/resultados/'+res.id, res).subscribe();
    // window.location.reload();
    this.router.navigate(['dashboard']);
  }
  getNotificaciones(): Observable<ResultadoQuiz[]> {
    return this.httpClient.get<ResultadoQuiz[]>('http://localhost:3000/resultados?q!=true');
  }
    

}