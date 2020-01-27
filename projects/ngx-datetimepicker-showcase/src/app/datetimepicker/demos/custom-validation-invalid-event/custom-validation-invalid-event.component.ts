import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-validation-invalid-event',
  templateUrl: './custom-validation-invalid-event.component.html',
  styles: []
})
export class CustomValidationInvalidEventComponent {

  isMeridian = true;
  myTime = new Date();
  valid = true;

  isValid(event: boolean): void {
    this.valid = event;
  }

}
