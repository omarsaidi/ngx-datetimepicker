import { Component } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styles: []
})
export class CustomValidationComponent {

  myTime: Date;

  ctrl = new FormControl('', (control: AbstractControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hours = value.getHours();

    if (hours < 11 || hours > 12) {
      return { outOfRange: true };
    }

    return null;
  });

}
