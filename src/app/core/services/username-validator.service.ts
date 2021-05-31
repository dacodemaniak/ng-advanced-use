import { HttpResponse } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsernameValidatorService {

  constructor(
    private userService: UserService
  ) { }

  public checkUserName(control: FormControl): Promise<{alreadyExists: boolean} | null> {
    return new Promise((resolve) => {
      this.userService.byName(control.value)
      .pipe(
        take(1)
      )
      .subscribe(
        (response: HttpResponse<any>) => {
          (response.status >= 200 && response.status < 400) ?
            resolve(null) :
            resolve({alreadyExists: true});
      }, (error) => {
        resolve({alreadyExists: true});
      });
    });
  }
}
