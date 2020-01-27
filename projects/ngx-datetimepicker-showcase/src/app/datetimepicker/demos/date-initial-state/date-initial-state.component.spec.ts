import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInitialStateComponent } from './date-initial-state.component';

describe('DateInitialStateComponent', () => {
  let component: DateInitialStateComponent;
  let fixture: ComponentFixture<DateInitialStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateInitialStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInitialStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
