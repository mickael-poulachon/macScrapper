import { TestBed } from '@angular/core/testing';

import { ScreenscraperService } from './screenscraper.service';

describe('ScreenscraperService', () => {
  let service: ScreenscraperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenscraperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
