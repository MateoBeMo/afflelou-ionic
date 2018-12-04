import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

import { QuizComponent } from '../quiz/quiz.component';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
       { path: '', redirectTo: 'quiz', pathMatch: 'full'},
       { path: '**', redirectTo: 'login', pathMatch: 'full'},
    ]
  },
  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full'
  }
];


export const TabsPageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class TabsPageRoutingModule {}
