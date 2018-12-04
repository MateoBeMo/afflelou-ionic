import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './quiz.component';
import { routing } from './quiz.routing';
import { StartQuizModule } from './start-quiz/start-quiz.module';
import { ApprovalQuizModule } from './approval-quiz/approval-quiz.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeQuizComponent } from './home-quiz/home-quiz.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    SharedModule,
    StartQuizModule,
    ApprovalQuizModule
  ],
  declarations: [QuizComponent, HomeQuizComponent]
})
export class QuizModule { }
