import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { map, take } from 'rxjs/operators';

import { environment } from '@environments/environment';

@Injectable()
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public byName(name: string): Observable<any> {
    return this.httpClient.get(
      `${environment.localUriRoot}user/${encodeURI(name)}`,
      {
        observe: 'response'
      }
    );
  }

  public add(user: any): Observable<any> {
    return this.httpClient.post(
      `${environment.localUriRoot}user`,
      user
    ).pipe(
      take(1),
      map((rawUser: any) => rawUser)
    );
  }
}
