import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimepickerContainerComponent } from './themes/datetimepicker-container.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DatetimepickerDirective } from './datetimepicker.directive';
import { DatetimeInputDirective } from './datetimepicker-input.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DatetimepickerContainerComponent,
    DatetimepickerDirective,
    DatetimeInputDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  entryComponents: [
    DatetimepickerContainerComponent,
  ],
  exports: [
    DatetimepickerContainerComponent,
    DatetimepickerDirective,
    DatetimeInputDirective,
  ]
})
export class DatetimepickerModule { }
