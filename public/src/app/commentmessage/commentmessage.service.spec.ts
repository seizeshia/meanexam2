import { TestBed, inject } from '@angular/core/testing';

import { CommentmessageService } from './commentmessage.service';

describe('CommentmessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentmessageService]
    });
  });

  it('should be created', inject([CommentmessageService], (service: CommentmessageService) => {
    expect(service).toBeTruthy();
  }));
});
