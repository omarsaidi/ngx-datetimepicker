import { Component, OnInit, EventEmitter } from '@angular/core';
import { DatetimepickerAbstractComponent } from '../base/datetimepicker-container';

@Component({
  selector: 'lib-datetimepicker-container',
  templateUrl: './datetimepicker-container.component.html',
  styles: []
})
export class DatetimepickerContainerComponent extends DatetimepickerAbstractComponent implements OnInit {
  private _value: Date;
  valueChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
    super();
  }

  get value() {
    return this._value;
  }
  set value(value: Date) {
    this._value = value;
  }

  ngOnInit() {
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
