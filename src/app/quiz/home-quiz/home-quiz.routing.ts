import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeQuizComponent } from './home-quiz.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [ {
  path: '',
  component: HomeQuizComponent,
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
