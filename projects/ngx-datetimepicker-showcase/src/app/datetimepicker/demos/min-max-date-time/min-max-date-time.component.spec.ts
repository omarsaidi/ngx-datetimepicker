import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxDateTimeComponent } from './min-max-date-time.component';

describe('MinMaxDateTimeComponent', () => {
  let component: MinMaxDateTimeComponent;
  let fixture: ComponentFixture<MinMaxDateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinMaxDateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinMaxDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
