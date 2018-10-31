import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmediaComponent } from './webmedia.component';

describe('WebmediaComponent', () => {
  let component: WebmediaComponent;
  let fixture: ComponentFixture<WebmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
