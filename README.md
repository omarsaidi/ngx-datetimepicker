# ngx-datetimepicker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Table of contents
1. [Installation instructions](#installation-instructions)
2. [Compatibility](#compatibility)

## Installation instructions

Install `ngx-datetimepicker` from `npm`:
```bash
npm install @mdcorp/ngx-datetimepicker --save
```

Add needed package to NgModule imports:
```
import { DatetimepickerModule } from '@mdcorp/ngx-datetimepicker';

@NgModule({
  ...
  imports: [
      DatetimepickerModule,
      ...
  ]
  ...
})
```

## Compatibility

The only two dependencies are [Angular](https://angular.io) and [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap).
Here is the versions compatibility list:

| @mdcorp/ngx-datetimepicker |    Angular    |  ngx-bootstrap |
| ---------------------------| ------------- | -------------- |
| 1.x.x                      | 7.x.x - 8.x.x | 5.x.x          |
