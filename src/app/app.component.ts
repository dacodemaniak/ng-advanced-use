import { UserService } from './core/services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService
  ) {}

  title = 'advanced-use';

  ngOnInit() {
    this.subscriptions.push(this.userService.add(
      {
        username: 'jlaubert',
        password: 'jla01'
      }
    ).pipe(
      take(1)
    )
    .subscribe((element: any) => {
      console.log(`Got ${JSON.stringify(element)}`);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
