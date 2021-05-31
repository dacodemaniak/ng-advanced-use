import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UserService } from './../services/user.service';
import { UsernameValidatorService } from './username-validator.service';

describe('UsernameValidatorService', () => {
  let service: UsernameValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        UserService
      ]
    });
    service = TestBed.inject(UsernameValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
