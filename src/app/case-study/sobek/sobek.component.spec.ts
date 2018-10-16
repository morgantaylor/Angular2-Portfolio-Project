import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobekComponent } from './case-study/study-sobek.component';

describe('SobekComponent', () => {
  let component: SobekComponent;
  let fixture: ComponentFixture<SobekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
