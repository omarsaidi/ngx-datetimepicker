import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidationInvalidEventComponent } from './custom-validation-invalid-event.component';

describe('CustomValidationInvalidEventComponent', () => {
  let component: CustomValidationInvalidEventComponent;
  let fixture: ComponentFixture<CustomValidationInvalidEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomValidationInvalidEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidationInvalidEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
