import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessrowComponent } from './guessrow.component';

describe('GuessrowComponent', () => {
  let component: GuessrowComponent;
  let fixture: ComponentFixture<GuessrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
