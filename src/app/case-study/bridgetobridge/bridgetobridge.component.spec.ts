import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgetobridgeComponent } from './case-study/bridgetobridge.component';

describe('BridgetobridgeComponent', () => {
  let component: BridgetobridgeComponent;
  let fixture: ComponentFixture<BridgetobridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgetobridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgetobridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
