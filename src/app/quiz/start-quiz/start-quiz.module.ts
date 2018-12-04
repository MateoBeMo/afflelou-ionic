import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './start-quiz.routing';
import { StartQuizComponent } from './start-quiz.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [StartQuizComponent]
})
export class StartQuizModule { }
