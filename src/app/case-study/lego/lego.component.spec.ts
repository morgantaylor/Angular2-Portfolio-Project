import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoComponent } from './case-study/lego.component';

describe('LegoComponent', () => {
  let component: LegoComponent;
  let fixture: ComponentFixture<LegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
