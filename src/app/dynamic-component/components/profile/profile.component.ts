import { Subject } from 'rxjs';
import { ProfileHostDirective } from './../../directives/profile-host.directive';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { mergeMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  template: `
    <ng-template appProfileHost></ng-template>
  `
})
export class ProfileComponent implements OnInit, OnDestroy {
  @ViewChild(ProfileHostDirective, {static: true}) profileHost!: ProfileHostDirective;

  private destroySubject$ = new Subject();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const viewContainerRef = this.profileHost.viewContainerRef;

    this.userService.isAuthenticated$
      .pipe(
        takeUntil(this.destroySubject$),
        mergeMap((isAuthenticated: boolean) => this.userService.loadComponent(viewContainerRef, isAuthenticated))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
