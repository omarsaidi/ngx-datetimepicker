import { Component } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-change-locale',
  templateUrl: './change-locale.component.html',
  styles: []
})
export class ChangeLocaleComponent {

  locale = 'en';
  locales = listLocales();

  constructor(private localeService: BsLocaleService) {}

  applyLocale(pop: any) {
    this.localeService.use(this.locale);
    pop.hide();
    pop.show();
  }
}
