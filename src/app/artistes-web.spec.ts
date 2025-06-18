import { TestBed } from '@angular/core/testing';

import { ArtistesWeb } from './artistes-web';

describe('ArtistesWeb', () => {
  let service: ArtistesWeb;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistesWeb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
