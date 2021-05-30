import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('Should return a user with id 1', () => {
    expect(service.add({
      username: 'jlaubert',
      password: 'jla01'
    })).toBe(of({
      id: 1,
      username: 'jlaubert',
      password: 'jla01'
    }))
  })
});
