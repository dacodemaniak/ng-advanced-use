import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  public get c(): {[key: string]: AbstractControl} {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: [
        '',
        Validators.required
      ],
      password: [
        '',
        Validators.required
      ]
    });
  }

  public doLogin(): void {
    this.userService.signin(this.form.value)
      .pipe(
        take(1)
      )
      .subscribe((response: HttpResponse<any>) => {
        console.log(`${response.status} ${response.body.message}`)
      });
  }
}
