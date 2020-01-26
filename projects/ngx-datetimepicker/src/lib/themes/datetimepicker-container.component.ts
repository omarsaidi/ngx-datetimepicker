import { Component, OnInit } from '@angular/core';
import { DatetimepickerAbstractComponent } from '../base/datetimepicker-container';

@Component({
  selector: 'lib-datetimepicker-container',
  templateUrl: './datetimepicker-container.component.html',
  styles: []
})
export class DatetimepickerContainerComponent extends DatetimepickerAbstractComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
