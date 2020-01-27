import { 
  Directive, OnInit, OnDestroy, OnChanges, Input, 
  ComponentRef, SimpleChanges, EventEmitter, Output, 
  ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoader, ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { DatetimepickerContainerComponent } from './themes/datetimepicker-container.component';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[datetimepicker]'
})
export class DatetimepickerDirective implements OnInit, OnDestroy, OnChanges {

  constructor(public _datepickerConfig: BsDatepickerConfig,
    _elementRef: ElementRef,
    _renderer: Renderer2,
    _viewContainerRef: ViewContainerRef,
    cis: ComponentLoaderFactory) {
    Object.assign(this, this._datepickerConfig);
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
  /* tslint:disable-next-line: no-any*/
  @Output() onShown: EventEmitter<any>;
  /**
   * Emits an event when the datepicker is hidden
   */
  /* tslint:disable-next-line: no-any*/
  @Output() onHidden: EventEmitter<any>;

  _bsValue: Date;
  /**
   * Initial value of datepicker
   */
  @Input()
  set bsValue(value: Date) {
    if (this._bsValue && value && this._bsValue.getTime() === value.getTime()) {
      return;
    }
    this._bsValue = value;
    this.bsValueChange.emit(value);
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
  @Input() bsConfig: Partial<BsDatepickerConfig>;
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

  /**
   * Emits when datepicker value has been changed
   */
  @Output() bsValueChange: EventEmitter<Date> = new EventEmitter();

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
    this.setDatePickerConfig();
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

    this._datetimepickerRef = this._datetimepicker
      .provide({ provide: BsDatepickerConfig, useValue: this._datepickerConfig })
      .attach(DatetimepickerContainerComponent)
      .to(this.container)
      .position({ attachment: this.placement })
      .show({ placement: this.placement });

    // if date changes from external source (model -> view)
    this._subs.push(
      this.bsValueChange.subscribe((value: Date) => {
        this._datetimepickerRef.instance.value = value;
      })
    );

    // if date changes from picker (view -> model)
    this._subs.push(
      this._datetimepickerRef.instance.valueChange.subscribe((value: Date) => {
        this.bsValue = value;
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
    this._datepickerConfig = Object.assign({}, this._datepickerConfig, this.bsConfig, {
      value: this._bsValue,
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
    });
  }
  ngOnDestroy(): void {
    this._datetimepicker.dispose();
  }
}
