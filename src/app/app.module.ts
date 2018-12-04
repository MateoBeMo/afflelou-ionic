import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';

import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from '../shared/shared.module';
import { QuizModule } from './quiz/quiz.module';
import { LoginModule } from './login/login.module';

import { LoggedInGuard } from './logged-in.guard';


// libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Modal
import { NgbdModalContent } from './dashboard/first-view/first-view.component';

@NgModule({
  declarations: [AppComponent, NgbdModalContent],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    // AppRoutingModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    DashboardModule,
    QuizModule,
    LoginModule,
    SharedModule.forRoot(),
    NgbModule.forRoot(),
    ChartsModule,
    NgxDatatableModule,
  ],
  providers: [
    LoggedInGuard,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
