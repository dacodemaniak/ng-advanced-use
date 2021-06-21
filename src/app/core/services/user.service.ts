import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { hydrate } from './../../_helpers/hydrater_helper';

import { map, take } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private httpClient: HttpClient
  ) { }

  public authenticated(): Subject<boolean> {
    return this.isAuthenticated$;
  }

  public byName(name: string): Observable<any> {
    return this.httpClient.get(
      `${environment.localUriRoot}user/${encodeURI(name)}`,
      {
        observe: 'response'
      }
    );
  }

  public add(user: any): Observable<any> {
    console.log(`Sending user to ${environment.localUriRoot}user`);
    return this.httpClient.post(
      `${environment.localUriRoot}user`,
      user
    ).pipe(
      take(1),
      map((rawUser: any) => hydrate(User, rawUser, false))
    );
  }
}
