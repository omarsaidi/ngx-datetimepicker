import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNavComponent } from './add-nav.component';

describe('AddNavComponent', () => {
  let component: AddNavComponent;
  let fixture: ComponentFixture<AddNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
