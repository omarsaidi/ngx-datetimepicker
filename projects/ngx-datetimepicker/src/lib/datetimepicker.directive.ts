import {
  Directive, OnInit, OnDestroy, OnChanges, Input,
  ComponentRef, SimpleChanges, EventEmitter, Output,
  ElementRef, Renderer2, ViewContainerRef
} from '@angular/core';
import { ComponentLoader, ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { DatetimepickerContainerComponent } from './themes/datetimepicker-container.component';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Subscription } from 'rxjs';
import { TimepickerConfig } from 'ngx-bootstrap/timepicker';

@Directive({
  selector: '[datetimepicker]',
  exportAs: 'datetimepicker'
})
export class DatetimepickerDirective implements OnInit, OnDestroy, OnChanges {

  constructor(public _datepickerConfig: BsDatepickerConfig,
    public _timepickerConfig: TimepickerConfig,
    _elementRef: ElementRef,
    _renderer: Renderer2,
    _viewContainerRef: ViewContainerRef,
    cis: ComponentLoaderFactory) {
    Object.assign(this, this._datepickerConfig);
    Object.assign(this, this._timepickerConfig);
    this._datetimepicker = cis.createLoader<DatetimepickerContainerComponent>(
      _elementRef,
      _viewContainerRef,
      _renderer
    );
    this.onShown = this._datetimepicker.onShown;
    this.onHidden = this._datetimepicker.onHidden;
  }
  /**
   * Emits an event when the datepicker is shown
   */
  @Output() onShown: EventEmitter<any>;
  /**
   * Emits an event when the datepicker is hidden
   */
  @Output() onHidden: EventEmitter<any>;

  _value: Date;
  /**
   * Emits when datepicker value has been changed
   */
  @Output() valueChange: EventEmitter<Date> = new EventEmitter();

  /**
   * Initial value of datepicker
   */
  @Input()
  set value(newValue: Date) {
    if (this._value && newValue && this._value.getTime() === newValue.getTime()) {
      return;
    }
    this._value = newValue;
    this.valueChange.emit(newValue);
  }
  /**
     * Returns whether or not the datepicker is currently being shown
     */
  @Input()
  get isOpen(): boolean {
    return this._datetimepicker.isShown;
  }

  set isOpen(value: boolean) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }
  /**
   * Config object for datepicker
   */
  @Input() config: Partial<BsDatepickerConfig>;
  /**
   * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
   */
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  /**
   * Specifies events that should trigger. Supports a space separated list of
   * event names.
   */
  @Input() triggers = 'click';
  /**
   * Close datepicker on outside click
   */
  @Input() outsideClick = true;
  /**
   * A selector specifying the element the datepicker should be appended to.
   */
  @Input() container = 'body';

  @Input() outsideEsc = true;

  protected _subs: Subscription[] = [];
  private _datetimepicker: ComponentLoader<DatetimepickerContainerComponent>;
  private _datetimepickerRef: ComponentRef<DatetimepickerContainerComponent>;

  ngOnInit(): void {
    this._datetimepicker.listen({
      outsideClick: this.outsideClick,
      outsideEsc: this.outsideEsc,
      triggers: this.triggers,
      show: () => this.show()
    });
    //this.setDatePickerConfig();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this._datetimepickerRef || !this._datetimepickerRef.instance) {
      return;
    }
    if (changes.minDate) {
      this._datetimepickerRef.instance.minDate = this.minDate;
    }

    if (changes.maxDate) {
      this._datetimepickerRef.instance.maxDate = this.maxDate;
    }

    if (changes.daysDisabled) {
      this._datetimepickerRef.instance.daysDisabled = this.daysDisabled;
    }

    if (changes.datesDisabled) {
      this._datetimepickerRef.instance.datesDisabled = this.datesDisabled;
    }

    if (changes.isDisabled) {
      this._datetimepickerRef.instance.isDisabled = this.isDisabled;
    }
    // Time
    if (changes.showMeridian) {
      this._datetimepickerRef.instance.showMeridian = this.showMeridian;
    }
  }
  /**
   * Opens an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  show(): void {
    if (this._datetimepicker.isShown) {
      return;
    }

    this.setDatePickerConfig();
    this.setTimePickerConfig();

    this._datetimepickerRef = this._datetimepicker
      .provide([
        { provide: BsDatepickerConfig, useValue: this._datepickerConfig },
        { provide: TimepickerConfig, useValue: this._timepickerConfig }
      ])
      .attach(DatetimepickerContainerComponent)
      .to(this.container)
      .position({ attachment: this.placement })
      .show({ placement: this.placement });
    this._datetimepickerRef.instance.value = this._value;
    // if date changes from external source (model -> view)
    this._subs.push(
      this.valueChange.subscribe((value: Date) => {
        this._datetimepickerRef.instance.value = value;
      })
    );

    // if date changes from picker (view -> model)
    this._subs.push(
      this._datetimepickerRef.instance.valueChange.subscribe((value: Date) => {
        this.value = value;
        this.hide();
      })
    );
  }

  /**
   * Closes an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  hide(): void {
    if (this.isOpen) {
      this._datetimepicker.hide();
    }
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
  }

  /**
   * Toggles an element’s datepicker. This is considered a “manual” triggering
   * of the datepicker.
   */
  toggle(): void {
    if (this.isOpen) {
      return this.hide();
    }

    this.show();
  }

  /**
   * Set config for datepicker
   */
  setDatePickerConfig(): void {
    this._datepickerConfig = Object.assign({}, this._datepickerConfig, this.config, {
      value: this._value,
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.config && this.config.minDate,
      maxDate: this.maxDate || this.config && this.config.maxDate,
      daysDisabled: this.daysDisabled || this.config && this.config.daysDisabled,
      datesDisabled: this.datesDisabled || this.config && this.config.datesDisabled
    });
  }
  setTimePickerConfig(): void {
    this._timepickerConfig = Object.assign({}, this._timepickerConfig, {
      hourStep: this.hourStep,
      minuteStep: this.minuteStep,
      secondsStep: this.secondsStep,
      readonlyInput: this.readonlyInput,
      disabled: this.disabled,
      mousewheel: this.mousewheel,
      arrowkeys: this.arrowkeys,
      showSpinners: this.showSpinners,
      showMeridian: this.showMeridian,
      showMinutes: this.showMinutes,
      showSeconds: this.showSeconds,
      meridians: this.meridians,
      min: this.min,
      max: this.max,
      hoursPlaceholder: this.hoursPlaceholder,
      minutesPlaceholder: this.minutesPlaceholder,
      secondsPlaceholder: this.secondsPlaceholder
    });
  }
  ngOnDestroy(): void {
    this._datetimepicker.dispose();
  }

  /**
   * Indicates whether datepicker's content is enabled or not
   */
  @Input() isDisabled: boolean;
  /**
   * Minimum date which is available for selection
   */
  @Input() minDate: Date;
  /**
   * Maximum date which is available for selection
   */
  @Input() maxDate: Date;
  /**
   * Disable Certain days in the week
   */
  @Input() daysDisabled: number[];

  /**
   * Disable specific dates
   */
  @Input() datesDisabled: Date[];

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
