import { Routes, RouterModule } from '@angular/router';
import { StartQuizComponent } from './start-quiz.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [ {
  path: '',
  component: StartQuizComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
