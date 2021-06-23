import { Router } from '@angular/router';
import { UserService } from './core/services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public isProfileShowed = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  title = 'advanced-use';

  ngOnInit() {}

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  public showMenu(event: BehaviorSubject<boolean>): void {
    event.subscribe((isAuthenticate: boolean) => {
      isAuthenticate ? this.userService.logout() : this.router.navigate(['user','login']);
    });
    this.isProfileShowed = !this.isProfileShowed;
  }
}
