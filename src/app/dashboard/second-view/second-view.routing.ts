import { Routes, RouterModule } from '@angular/router';

import { SecondViewComponent } from './second-view.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [{
  // path: 'dashboard/second-view',
  path: '',
  component: SecondViewComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

