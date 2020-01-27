import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimepickerDemoComponent } from './datetimepicker.demo.component';
import { BasicComponent } from './demos/basic/basic.component';
import { TabsModule } from "ngx-bootstrap/tabs";
import { DatetimepickerModule } from 'ngx-datetimepicker';
import { DatetimepickerDemoRoutingModule } from './datetimepicker.demo-routing.module';
import { AnimatedComponent } from './demos/animated/animated.component';
import { DateInitialStateComponent } from './demos/date-initial-state/date-initial-state.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDateFormatComponent } from './demos/custom-date-format/custom-date-format.component';
import { CommonDemoModule } from '../common/common.module';
import { MeridianComponent } from './demos/meridian/meridian.component';


@NgModule({
  declarations: [
    DatetimepickerDemoComponent,
    BasicComponent,
    AnimatedComponent,
    DateInitialStateComponent,
    CustomDateFormatComponent,
    MeridianComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    DatetimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    DatetimepickerDemoRoutingModule,
    CommonDemoModule
  ]
})
export class DatetimepickerDemoModule { }
