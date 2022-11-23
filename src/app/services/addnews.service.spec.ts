import { TestBed } from '@angular/core/testing';

import { AddnewsService } from './addnews.service';

describe('AddnewsService', () => {
  let service: AddnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
