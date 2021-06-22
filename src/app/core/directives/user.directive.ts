import { BehaviorSubject, Subject } from 'rxjs';
import { UserService } from './../services/user.service';
import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[userMenu], user-menu'
})
export class UserDirective implements OnInit {
  private nativeElement!: any;
  @Output() public authentication: EventEmitter<BehaviorSubject<boolean>> = new EventEmitter<BehaviorSubject<boolean>>();

  constructor(
    private userService: UserService,
    elementRef: ElementRef
  ) {
    this.nativeElement = elementRef.nativeElement;
  }

  ngOnInit(): void {
    const spanEl = document.createElement('span');

    this.userService.authenticated().subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        spanEl.classList.add('material-icons');
        spanEl.textContent = 'account_circle';
      }
    });


    this.nativeElement.appendChild(spanEl);
  }

  @HostListener('click') onClick(): void {
    this.authentication.emit(this.userService.isAuthenticated$);
  }

}
