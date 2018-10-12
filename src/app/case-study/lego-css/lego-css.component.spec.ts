import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoCSSComponent } from './case-study/lego-css.component';

describe('LegoCSSComponent', () => {
  let component: LegoCSSComponent;
  let fixture: ComponentFixture<LegoCSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoCSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
