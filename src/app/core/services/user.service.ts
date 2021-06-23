import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { hydrate } from './../../_helpers/hydrater_helper';

import { map, take } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '../models/user';

@Injectable()
export class UserService {
  public isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private httpClient: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public authenticated(): BehaviorSubject<boolean> {
    return this.isAuthenticated$;
  }

  public logout(): void {
    this.isAuthenticated$.next(false);
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

  public async loadComponent(vcr: ViewContainerRef, isLoggedIn: boolean) {
    const { AnonymousComponent } = await import('./../../dynamic-component/components/anonymous/anonymous.component');
    const { RegisteredComponent } = await import('./../../dynamic-component/components/registered/registered.component');

    vcr.clear();

    const component: any = isLoggedIn ? RegisteredComponent : AnonymousComponent;

    return vcr.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(component)
    );
  }
}
