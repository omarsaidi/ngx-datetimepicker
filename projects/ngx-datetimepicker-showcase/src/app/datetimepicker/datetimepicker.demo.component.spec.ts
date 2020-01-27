import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimepickerDemoComponent } from './datetimepicker.demo.component';

describe('DatetimepickerComponent', () => {
  let component: DatetimepickerDemoComponent;
  let fixture: ComponentFixture<DatetimepickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimepickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimepickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
