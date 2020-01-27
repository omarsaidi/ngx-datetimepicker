import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-meridian',
  templateUrl: './custom-meridian.component.html',
  styles: []
})
export class CustomMeridianComponent {

  mytime: Date = new Date();
  meridians = ['AM(Midnight to Noon)', 'PM(Noon to Midnight)'];

}
