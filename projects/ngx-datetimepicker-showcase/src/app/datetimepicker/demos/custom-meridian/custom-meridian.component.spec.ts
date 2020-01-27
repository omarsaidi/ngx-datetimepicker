import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMeridianComponent } from './custom-meridian.component';

describe('CustomMeridianComponent', () => {
  let component: CustomMeridianComponent;
  let fixture: ComponentFixture<CustomMeridianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMeridianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMeridianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
