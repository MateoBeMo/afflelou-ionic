import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './detalle-valoracion.routing';
import { DetalleValoracionComponent } from './detalle-valoracion.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,FormsModule,routing, SharedModule
  ],
  declarations: [DetalleValoracionComponent]
})
export class DetalleValoracionModule { }
