import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDateFormatComponent } from './custom-date-format.component';

describe('CustomDateFormatComponent', () => {
  let component: CustomDateFormatComponent;
  let fixture: ComponentFixture<CustomDateFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDateFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDateFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
