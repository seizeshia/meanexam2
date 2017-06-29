import { TestBed, inject } from '@angular/core/testing';

import { MessagedetailsService } from './messagedetails.service';

describe('MessagedetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagedetailsService]
    });
  });

  it('should be created', inject([MessagedetailsService], (service: MessagedetailsService) => {
    expect(service).toBeTruthy();
  }));
});
