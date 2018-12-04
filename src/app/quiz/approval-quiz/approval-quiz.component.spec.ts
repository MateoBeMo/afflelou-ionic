import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalQuizComponent } from './approval-quiz.component';

describe('ApprovalQuizComponent', () => {
  let component: ApprovalQuizComponent;
  let fixture: ComponentFixture<ApprovalQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
