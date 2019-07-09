import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoggedInGuard } from './logged-in.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full'},
  // { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
