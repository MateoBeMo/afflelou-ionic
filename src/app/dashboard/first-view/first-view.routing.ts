import { Routes, RouterModule } from '@angular/router';

import { FirstViewComponent } from './first-view.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [{
  path: '',
  component: FirstViewComponent
}];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
