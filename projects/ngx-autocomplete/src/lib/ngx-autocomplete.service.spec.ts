import { TestBed } from '@angular/core/testing';

import { NgxAutocompleteService } from './ngx-autocomplete.service';

describe('NgxAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAutocompleteService = TestBed.get(NgxAutocompleteService);
    expect(service).toBeTruthy();
  });
});
