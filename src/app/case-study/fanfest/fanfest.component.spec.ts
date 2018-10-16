import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanfestComponent } from './case-study/fanfest.component';

describe('FanfestComponent', () => {
  let component: FanfestComponent;
  let fixture: ComponentFixture<FanfestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanfestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
