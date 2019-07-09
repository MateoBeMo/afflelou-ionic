import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './quiz.component';
import { routing } from './quiz.routing';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    SharedModule,
  ],
  declarations: [QuizComponent]
})
export class QuizModule { }
