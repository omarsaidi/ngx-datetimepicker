import { Component } from '@angular/core';

@Component({
  selector: 'app-meridian',
  templateUrl: './meridian.component.html',
  styles: []
})
export class MeridianComponent {

  ismeridian: boolean = true;

  mytime: Date = new Date();

  toggleMode(): void {
    this.ismeridian = !this.ismeridian;
  }
}
