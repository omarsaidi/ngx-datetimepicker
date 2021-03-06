import { Component, EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { DatetimepickerAbstractComponent } from '../base/datetimepicker-container';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerConfig } from 'ngx-bootstrap/timepicker';

@Component({
  selector: 'datetimepicker-container',
  templateUrl: './datetimepicker-container.component.html',
  styleUrls: ['./datetimepicker-container.component.scss']
})
export class DatetimepickerContainerComponent extends DatetimepickerAbstractComponent {
  private _value: Date;
  valueChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(
    datepickerConfig: BsDatepickerConfig,
    timepickerConfig: TimepickerConfig,
    renderer: Renderer2,
    element: ElementRef,) {
    super();
    Object.assign(this, timepickerConfig);
    renderer.setStyle(element.nativeElement, 'display', 'block');
    renderer.setStyle(element.nativeElement, 'position', 'absolute');
  }

  get value() {
    return this._value;
  }
  set value(newValue: Date) {
    this._value = newValue;
  }

  public onCancelClicked(event: any): void {
    // this.hidePicker$.next(null);
    event.preventDefault();
    return;
  }

  /**
   * Handle click on set button
   */
  public onSetClicked(event: any): void {
    this.valueChange.emit(this._value)
    event.preventDefault();
    return;
  }
}
