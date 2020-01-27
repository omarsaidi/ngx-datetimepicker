import { Directive, forwardRef, ElementRef, Host, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { DatetimepickerDirective } from './datetimepicker.directive';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { utcAsLocal, isDateValid, isDate, isBefore, isAfter, getLocale, parseDate, formatDate } from 'ngx-bootstrap/chronos';

@Directive({
  selector: 'input[datetimepicker]',
  host: {
    '(change)': 'onChange($event)',
    '(keyup.esc)': 'hide()',
    '(blur)': 'onBlur()'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimeInputDirective),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      /* tslint:disable-next-line: no-use-before-declare */
      useExisting: forwardRef(() => DatetimeInputDirective),
      multi: true
    }
  ]
})
export class DatetimeInputDirective implements ControlValueAccessor, Validator {

  private _onChange = Function.prototype;
  private _onTouched = Function.prototype;
  private _validatorChange = Function.prototype;
  private _value: Date;

  constructor(@Host() private _picker: DatetimepickerDirective,
    private _localeService: BsLocaleService,
    private _renderer: Renderer2,
    private _elRef: ElementRef,
    private changeDetection: ChangeDetectorRef) {
    // update input value on datepicker value update
    this._picker.valueChange.subscribe((value: Date) => {
      this._setInputValue(value);
      if (this._value !== value) {
        this._value = value;
        this._onChange(value);
        this._onTouched();
      }
      this.changeDetection.markForCheck();
    });
    // update input value on locale change
    this._localeService.localeChange.subscribe(() => {
      this._setInputValue(this._value);
    });
  }

  _setInputValue(value: Date): void {
    const initialDate = !value ? ''
      : formatDate(value, this._picker._datepickerConfig.dateInputFormat, this._localeService.currentLocale);

    this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
  }

  writeValue(value: Date | string): void {
    if (!value) {
      this._value = null;
    } else {
      const _localeKey = this._localeService.currentLocale;
      const _locale = getLocale(_localeKey);
      if (!_locale) {
        throw new Error(
          `Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`
        );
      }

      this._value = parseDate(value, this._picker._datepickerConfig.dateInputFormat, this._localeService.currentLocale);

      if (this._picker._datepickerConfig.useUtc) {
        this._value = utcAsLocal(this._value);
      }
    }

    this._picker.value = this._value;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._picker.isDisabled = isDisabled;
    if (isDisabled) {
      this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');

      return;
    }
    this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
  }

  validate(control: AbstractControl): ValidationErrors {
    const _value: Date | string = control.value;

    if (_value === null || _value === undefined || _value === '') {
      return null;
    }

    if (isDate(_value)) {
      const _isDateValid = isDateValid(_value);
      if (!_isDateValid) {
        return { bsDate: { invalid: _value } };
      }

      if (this._picker && this._picker.minDate && isBefore(_value, this._picker.minDate, 'date')) {
        this.writeValue(this._picker.minDate);

        return { bsDate: { minDate: this._picker.minDate } };
      }

      if (this._picker && this._picker.maxDate && isAfter(_value, this._picker.maxDate, 'date')) {
        this.writeValue(this._picker.maxDate);

        return { bsDate: { maxDate: this._picker.maxDate } };
      }
    }
  }
  registerOnValidatorChange?(fn: () => void): void {
    this._validatorChange = fn;
  }

  onBlur() {
    this._onTouched();
  }
  onChange(event: Event) {
    /* tslint:disable-next-line: no-any*/
    this.writeValue((event.target as any).value);
    this._onChange(this._value);
    this._onTouched();
  }
  hide() {
    this._picker.hide();
    this._renderer.selectRootElement(this._elRef.nativeElement).blur();
  }
}

