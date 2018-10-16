import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YosemiteComponent } from './case-study/study-yosemite.component';

describe('YosemiteComponent', () => {
  let component: YosemiteComponent;
  let fixture: ComponentFixture<YosemiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YosemiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YosemiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
