import { TestBed } from '@angular/core/testing';

import { ChartDataHelperService } from './chart-data-helper.service';

describe('ChartDataHelperService', () => {
  let service: ChartDataHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartDataHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
