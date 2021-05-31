import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpClient,
        HttpHandler,
        UserService
      ]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('Should return a user with an id', (done) => {
    let userCreated: any = {};
    let userToCreate: any = {
      username: 'dupont',
      password: 'dupont01'
    };
    service.add(userToCreate).subscribe((result) => {
      userCreated = result;
      const hasAnId: boolean = userCreated.hasOwnProperty('id');
      expect(hasAnId).toBeTrue();
      done();
    });
    const request = httpMock.expectOne('http://localhost:4200/api/v1/user');
    expect(request.request.method).toBe('POST');
    request.flush(userToCreate);
  });

  it('Should return a 200 if user doesn\'t exist', () => {});

  it('Should return a 401 if user exists', () => {})
});
