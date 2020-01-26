import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimepickerContainerComponent } from './datetimepicker-container.component';

describe('DatetimepickerContainerComponent', () => {
  let component: DatetimepickerContainerComponent;
  let fixture: ComponentFixture<DatetimepickerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimepickerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimepickerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
