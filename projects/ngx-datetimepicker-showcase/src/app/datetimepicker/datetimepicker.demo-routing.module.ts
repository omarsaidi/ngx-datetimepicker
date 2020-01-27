import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatetimepickerDemoComponent } from './datetimepicker.demo.component';


const routes: Routes = [
  {
    path: '',
    component: DatetimepickerDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatetimepickerDemoRoutingModule { }
