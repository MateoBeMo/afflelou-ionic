import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: 'quiz',
    component: QuizComponent,
    children: [
      // { path: '', redirectTo: 'approval-quiz', pathMatch: 'full'},
      { path: 'approval-quiz', loadChildren: './approval-quiz/approval-quiz.module#ApprovalQuizModule' },
      { path: 'start-quiz', loadChildren: './start-quiz/start-quiz.module#StartQuizModule'},
      { path: 'login', redirectTo: '/login', pathMatch: 'full'},
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
