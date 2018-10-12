import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyflowfitnessComponent } from './case-study/dailyflowfitness.component';

describe('DailyflowfitnessComponent', () => {
  let component: DailyflowfitnessComponent;
  let fixture: ComponentFixture<DailyflowfitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyflowfitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyflowfitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
