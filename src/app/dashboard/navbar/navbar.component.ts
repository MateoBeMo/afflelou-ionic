import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { RespuestaService } from '../../../shared/services/respuesta.service';
import { ResultadoQuiz } from '../../interfaces/resultado-quiz';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  notificaciones: ResultadoQuiz [] = null;
  public isCollapsed = false;

  constructor(private userService: UserService, private respuestaService: RespuestaService) {
     respuestaService.updateUserStatus.subscribe( res => {
       this.getNotificaciones();
   });
   }

  ngOnInit() {
    this.respuestaService.getNotificaciones().subscribe(data => {
      // this.notificaciones = data.filter(res => res.respuestas.every( r => r.visto != true));
      this.notificaciones = data.filter(res => res.respuestas.find( r => r.valoracion !== 'Positiva' && r.visto !== true));
        // console.log(this.notificaciones);
    });
}
  logOut(): void {
    this.userService.logout();
  }
  public getNotificaciones(): void {
    this.respuestaService.getNotificaciones().subscribe(data => {
    // this.notificaciones = data.filter(res => res.respuestas.every( r => r.visto != true));
    this.notificaciones = data.filter(res => res.respuestas.find( r => r.valoracion !== 'Positiva' && r.visto !== true));
      // console.log(this.notificaciones);
    });
  }
}
