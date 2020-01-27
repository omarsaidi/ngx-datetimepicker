import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-date-format',
  templateUrl: './custom-date-format.component.html',
  styles: []
})
export class CustomDateFormatComponent {

  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
    dateFull: new FormControl(new Date()),
    dateMDY: new FormControl(new Date()),
  });
}
