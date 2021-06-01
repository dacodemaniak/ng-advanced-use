
import { fakeBackendProvider } from './fake-backend.service';
import { User } from './../models/user';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { UserService } from './user.service';

import { environment } from '@environments/environment';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        fakeBackendProvider,
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

  it ('Should return a user with an id', inject([UserService], fakeAsync((service: UserService) => {
    let userCreated: any = {};
    let userToCreate: any = {
      username: 'dupont',
      password: 'dupont01'
    };
    service.add(userToCreate).subscribe((result) => {
      userCreated = result;
      const hasAnId: boolean = userCreated.hasOwnProperty('id');
      expect(hasAnId).toBeTrue();
      expect(userCreated instanceof User).toBeTrue();
    });

    const request = httpMock.expectOne(`${environment.localUriRoot}user`);
    request.flush(userToCreate);
    expect(request.request.method).toBe('POST');
    tick();

  })));

  it('Should return a 200 if user doesn\'t exist', () => {});

  it('Should return a 401 if user exists', () => {})
});
