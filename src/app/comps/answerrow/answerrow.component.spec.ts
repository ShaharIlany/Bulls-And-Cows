import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerrowComponent } from './answerrow.component';

describe('AnswerrowComponent', () => {
  let component: AnswerrowComponent;
  let fixture: ComponentFixture<AnswerrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
