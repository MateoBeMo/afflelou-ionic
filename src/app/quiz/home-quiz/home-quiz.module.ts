import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './home-quiz.routing';
import { HomeQuizComponent } from './home-quiz.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [HomeQuizComponent]
})
export class HomeQuizModule { }
