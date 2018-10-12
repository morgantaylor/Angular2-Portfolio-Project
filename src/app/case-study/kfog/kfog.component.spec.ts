import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KfogComponent } from './case-study/kfog.component';

describe('KfogComponent', () => {
  let component: KfogComponent;
  let fixture: ComponentFixture<KfogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KfogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KfogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
