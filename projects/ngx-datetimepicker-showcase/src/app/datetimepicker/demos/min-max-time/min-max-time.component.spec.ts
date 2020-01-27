import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxTimeComponent } from './min-max-time.component';

describe('MinMaxTimeComponent', () => {
  let component: MinMaxTimeComponent;
  let fixture: ComponentFixture<MinMaxTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinMaxTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinMaxTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
