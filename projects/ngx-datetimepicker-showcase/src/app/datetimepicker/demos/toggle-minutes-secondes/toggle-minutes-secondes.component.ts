import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-minutes-secondes',
  templateUrl: './toggle-minutes-secondes.component.html',
  styles: []
})
export class ToggleMinutesSecondesComponent {

  myTime: Date = new Date();
  showMin: boolean = true;
  showSec: boolean = true;

  toggleMinutes(): void {
    this.showMin = !this.showMin;
  }

  toggleSeconds(): void {
    this.showSec = !this.showSec;
  }

}
