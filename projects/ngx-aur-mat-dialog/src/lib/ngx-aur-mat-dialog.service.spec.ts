import { TestBed } from '@angular/core/testing';

import { NgxAurMatDialogService } from './ngx-aur-mat-dialog.service';

describe('NgxAurMatDialogService', () => {
  let service: NgxAurMatDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAurMatDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
