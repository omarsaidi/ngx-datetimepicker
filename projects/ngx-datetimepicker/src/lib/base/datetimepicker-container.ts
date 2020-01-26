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
}