import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-max-time',
  templateUrl: './min-max-time.component.html',
  styles: []
})
export class MinMaxTimeComponent {

  mytime: Date = new Date();
  minTime: Date = new Date();
  maxTime: Date = new Date();

  constructor() {
    this.minTime.setHours(8);
    this.minTime.setMinutes(0);
    this.maxTime.setHours(23);
    this.maxTime.setMinutes(0);
  }

}
