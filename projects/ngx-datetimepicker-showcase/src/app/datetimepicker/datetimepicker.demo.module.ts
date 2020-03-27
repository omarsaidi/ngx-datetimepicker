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
import { CustomMeridianComponent } from './demos/custom-meridian/custom-meridian.component';
import { MinMaxTimeComponent } from './demos/min-max-time/min-max-time.component';
import { ToggleMinutesSecondesComponent } from './demos/toggle-minutes-secondes/toggle-minutes-secondes.component';
import { CustomStepsComponent } from './demos/custom-steps/custom-steps.component';
import { CustomValidationComponent } from './demos/custom-validation/custom-validation.component';
import { CustomValidationInvalidEventComponent } from './demos/custom-validation-invalid-event/custom-validation-invalid-event.component';
import { ChangeLocaleComponent } from './demos/change-locale/change-locale.component';

import {
  arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, etLocale, frLocale, heLocale,
  hiLocale, hrLocale, fiLocale, glLocale, huLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, lvLocale, mnLocale, nbLocale,
  nlBeLocale, nlLocale, plLocale, ptBrLocale, ruLocale, roLocale, skLocale, slLocale, svLocale, thLocale, trLocale, viLocale,
  zhCnLocale, ukLocale
} from 'ngx-bootstrap/locale';
import { LocaleData, defineLocale } from 'ngx-bootstrap/chronos';
import { PlacementComponent } from './demos/placement/placement.component';
import { ThemesComponent } from './demos/themes/themes.component';
import { MinMaxDateComponent } from './demos/min-max-date/min-max-date.component';
import { MinMaxDateTimeComponent } from './demos/min-max-date-time/min-max-date-time.component';

const locales = [
  arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, etLocale, frLocale,
  heLocale, hiLocale, hrLocale, fiLocale, glLocale, huLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, lvLocale, mnLocale,
  nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, ruLocale, roLocale, skLocale, slLocale, svLocale, thLocale,
  trLocale, ukLocale, viLocale, zhCnLocale
];

locales.forEach((locale: LocaleData) => {
  if (!locale.abbr) {
    return;
  }

  defineLocale(locale.abbr, locale);
});

@NgModule({
  declarations: [
    DatetimepickerDemoComponent,
    BasicComponent,
    AnimatedComponent,
    DateInitialStateComponent,
    CustomDateFormatComponent,
    MeridianComponent,
    CustomMeridianComponent,
    MinMaxTimeComponent,
    ToggleMinutesSecondesComponent,
    CustomStepsComponent,
    CustomValidationComponent,
    CustomValidationInvalidEventComponent,
    ChangeLocaleComponent,
    PlacementComponent,
    ThemesComponent,
    MinMaxDateComponent,
    MinMaxDateTimeComponent
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
