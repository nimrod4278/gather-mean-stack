import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercCircleComponent } from './perc-circle.component';

describe('PercCircleComponent', () => {
  let component: PercCircleComponent;
  let fixture: ComponentFixture<PercCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
