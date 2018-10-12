import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgoradioComponent } from './case-study/kgoradio.component';

describe('KgoradioComponent', () => {
  let component: KgoradioComponent;
  let fixture: ComponentFixture<KgoradioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgoradioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgoradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
