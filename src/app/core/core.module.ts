import { UserService } from './services/user.service';
import { fakeBackendProvider } from './services/fake-backend.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
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
