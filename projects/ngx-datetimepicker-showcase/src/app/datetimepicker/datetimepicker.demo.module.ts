import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimepickerDemoComponent } from './datetimepicker.demo.component';
import { BasicComponent } from './demos/basic/basic.component';
import { TabsModule } from "ngx-bootstrap/tabs";
import { DatetimepickerModule } from 'ngx-datetimepicker';
import { DatetimepickerDemoRoutingModule } from './datetimepicker.demo-routing.module';


@NgModule({
  declarations: [
    DatetimepickerDemoComponent,
    BasicComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    DatetimepickerModule,
    DatetimepickerDemoRoutingModule
  ]
})
export class DatetimepickerDemoModule { }
