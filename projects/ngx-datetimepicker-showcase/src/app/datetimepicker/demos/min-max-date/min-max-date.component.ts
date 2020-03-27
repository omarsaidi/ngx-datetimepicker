import { Component } from '@angular/core';

@Component({
  selector: 'app-min-max-date',
  templateUrl: './min-max-date.component.html',
  styles: []
})
export class MinMaxDateComponent {

  minDate: Date;
  maxDate: Date;
 
  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

}
