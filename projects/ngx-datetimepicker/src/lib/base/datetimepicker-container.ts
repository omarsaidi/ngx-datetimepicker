import { Input } from '@angular/core';

export abstract class DatetimepickerAbstractComponent {
    private _minDate: Date;
    private _maxDate: Date;
    private _datesDisabled: Date[];
    private _daysDisabled: number[];
    private _isDisabled: boolean;

    get minDate() {
        return this._minDate;
    }
    set minDate(value: Date) {
        this._minDate = value;
    }
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value: Date) {
        this._maxDate = value;
    }
    get daysDisabled() {
        return this._daysDisabled;
    }
    set daysDisabled(value: number[]) {
        this._daysDisabled = value;
    }
    get datesDisabled() {
        return this._datesDisabled;
    }
    set datesDisabled(value: Date[]) {
        this._datesDisabled = value;
    }
    get isDisabled() {
        return this._isDisabled;
    }
    set isDisabled(value: boolean) {
        this._isDisabled = value;
    }
    /** hours change step */
    @Input() hourStep: number;
    /** hours change step */
    @Input() minuteStep: number;
    /** seconds change step */
    @Input() secondsStep: number;
    /** if true hours and minutes fields will be readonly */
    @Input() readonlyInput: boolean;
    /** if true hours and minutes fields will be disabled */
    @Input() disabled: boolean;
    /** if true scroll inside hours and minutes inputs will change time */
    @Input() mousewheel: boolean;
    /** if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard */
    @Input() arrowkeys: boolean;
    /** if true spinner arrows above and below the inputs will be shown */
    @Input() showSpinners: boolean;
    /** if true meridian button will be shown */
    @Input() showMeridian: boolean;
    /** show minutes in timepicker */
    @Input() showMinutes: boolean;
    /** show seconds in timepicker */
    @Input() showSeconds: boolean;
    /** meridian labels based on locale */
    @Input() meridians: string[];
    /** minimum time user can select */
    @Input() min: Date;
    /** maximum time user can select */
    @Input() max: Date;
    /** placeholder for hours field in timepicker */
    @Input() hoursPlaceholder: string;
    /** placeholder for minutes field in timepicker */
    @Input() minutesPlaceholder: string;
    /** placeholder for seconds field in timepicker */
    @Input() secondsPlaceholder: string;
}