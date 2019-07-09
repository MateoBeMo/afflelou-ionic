import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './approval-quiz.routing';
import { ApprovalQuizComponent } from './approval-quiz.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [ApprovalQuizComponent]
})
export class ApprovalQuizModule { }
