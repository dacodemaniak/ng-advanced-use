import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss']
})
export class RegisteredComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
