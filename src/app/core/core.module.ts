import { UserService } from './services/user.service';
import { fakeBackendProvider } from './services/fake-backend.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDirective } from './directives/user.directive';
import { LoginRowComponent } from './components/login-row/login-row.component';
import { LogoutRowComponent } from './components/logout-row/logout-row.component';



@NgModule({
  declarations: [
    UserDirective,
    LoginRowComponent,
    LogoutRowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserDirective
  ],
  providers: [
    fakeBackendProvider,
    UserService
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(`Core module is already loaded. Only import it in the AppModule`);
    }
  }
}
