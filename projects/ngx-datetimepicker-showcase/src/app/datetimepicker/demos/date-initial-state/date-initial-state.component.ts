import { Component } from '@angular/core';

@Component({
  selector: 'app-date-initial-state',
  templateUrl: './date-initial-state.component.html',
  styles: []
})
export class DateInitialStateComponent {
  value = new Date();
  constructor() { }
}
