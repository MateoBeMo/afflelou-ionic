import { Routes, RouterModule } from '@angular/router';
import { ApprovalQuizComponent } from './approval-quiz.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [  {
  path: 'quiz/approval-quiz',
  component: ApprovalQuizComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
