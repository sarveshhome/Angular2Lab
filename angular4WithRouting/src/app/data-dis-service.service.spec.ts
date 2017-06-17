import { TestBed, inject } from '@angular/core/testing';

import { DataDisServiceService } from './data-dis-service.service';

describe('DataDisServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataDisServiceService]
    });
  });

  it('should ...', inject([DataDisServiceService], (service: DataDisServiceService) => {
    expect(service).toBeTruthy();
  }));
});
