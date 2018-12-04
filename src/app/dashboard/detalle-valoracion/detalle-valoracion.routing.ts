import { Routes, RouterModule } from '@angular/router';

import { DetalleValoracionComponent } from './detalle-valoracion.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [{
  // path: 'dashboard/second-view',
  path: '',
  component: DetalleValoracionComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);