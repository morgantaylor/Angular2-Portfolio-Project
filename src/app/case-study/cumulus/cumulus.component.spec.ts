import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulusComponent } from './case-study/cumulus.component';

describe('CumulusComponent', () => {
  let component: CumulusComponent;
  let fixture: ComponentFixture<CumulusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
