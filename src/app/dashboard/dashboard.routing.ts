import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';
import { LoggedInGuard } from '../logged-in.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoggedInGuard],
    children: [
      { path: '', redirectTo: 'first-view', pathMatch: 'full'},
      { path: 'first-view', loadChildren: './first-view/first-view.module#FirstViewModule', canActivate: [LoggedInGuard] },
      { path: 'second-view', loadChildren: './second-view/second-view.module#SecondViewModule', canActivate: [LoggedInGuard] },
      { path: 'detalle-valoracion/:id', loadChildren: './detalle-valoracion/detalle-valoracion.module#DetalleValoracionModule', canActivate: [LoggedInGuard] },
      { path: 'quiz', redirectTo: 'quiz', pathMatch: 'full'},
    ]
  },
  { path: 'dashboard/quiz', redirectTo: 'quiz', pathMatch: 'full'},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
