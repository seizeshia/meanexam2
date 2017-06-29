import { TestBed, inject } from '@angular/core/testing';

import { NewmessageService } from './newmessage.service';

describe('NewmessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewmessageService]
    });
  });

  it('should be created', inject([NewmessageService], (service: NewmessageService) => {
    expect(service).toBeTruthy();
  }));
});
