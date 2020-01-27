import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleMinutesSecondesComponent } from './toggle-minutes-secondes.component';

describe('ToggleMinutesSecondesComponent', () => {
  let component: ToggleMinutesSecondesComponent;
  let fixture: ComponentFixture<ToggleMinutesSecondesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleMinutesSecondesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleMinutesSecondesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
