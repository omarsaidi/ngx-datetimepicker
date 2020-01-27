import { DatetimepickerDirective } from './datetimepicker.directive';
import { Component, ViewChild, Renderer2 } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatetimepickerModule } from './datetimepicker.module';
import { DatetimepickerContainerComponent } from './themes/datetimepicker-container.component';

Component({
  selector: 'test-cmp',
  template: `<input type="text" datetimepicker [config]="config">`
})
class TestDatetimepickerDirective {
  @ViewChild(DatetimepickerDirective, { static: false }) datepicker: DatetimepickerDirective;
  bsConfig: Partial<BsDatepickerConfig> = {
    displayMonths: 2,
    selectWeek: true
  };
}
type TestFixture = ComponentFixture<TestDatetimepickerDirective>;

function getDatepickerDirective(fixture: TestFixture): DatetimepickerDirective {
  const datepicker: DatetimepickerDirective = fixture.componentInstance.datepicker;

  return datepicker;
}

function showDatepicker(fixture: TestFixture): DatetimepickerDirective {
  const datepicker = getDatepickerDirective(fixture);
  datepicker.show();
  fixture.detectChanges();

  return datepicker;
}

function hideDatepicker(fixture: TestFixture): DatetimepickerDirective {
  const datepicker = getDatepickerDirective(fixture);
  datepicker.hide();
  fixture.detectChanges();

  return datepicker;
}

function getDatepickerContainer(datepicker: DatetimepickerDirective): DatetimepickerContainerComponent | null {
  return datepicker[`_datepickerRef`] ? datepicker[`_datepickerRef`].instance : null;
}

fdescribe('datepicker:', () => {
  let fixture: TestFixture;
  beforeEach(
    async(() => TestBed.configureTestingModule({
        declarations: [TestDatetimepickerDirective],
        imports: [
          DatetimepickerModule,
          BrowserAnimationsModule
        ]
    }).compileComponents()
    ));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestDatetimepickerDirective);
    fixture.detectChanges();
  });

  it('should display datepicker on show', () => {
    const datepicker = showDatepicker(fixture);
    expect(getDatepickerContainer(datepicker)).toBeDefined();
  });

  it('should hide datepicker on hide', () => {
    const datepicker = hideDatepicker(fixture);
    expect(getDatepickerContainer(datepicker)).toBeNull();
  });

  
});
