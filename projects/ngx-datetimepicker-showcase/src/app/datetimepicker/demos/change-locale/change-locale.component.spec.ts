import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLocaleComponent } from './change-locale.component';

describe('ChangeLocaleComponent', () => {
  let component: ChangeLocaleComponent;
  let fixture: ComponentFixture<ChangeLocaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLocaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
