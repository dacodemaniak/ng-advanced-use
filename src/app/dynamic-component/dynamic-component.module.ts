import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnonymousComponent } from './components/anonymous/anonymous.component';
import { RegisteredComponent } from './components/registered/registered.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileHostDirective } from './directives/profile-host.directive';


@NgModule({
  declarations: [
    AnonymousComponent,
    RegisteredComponent,
    ProfileComponent,
    ProfileHostDirective
  ],
  imports: [
    //CommonModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class DynamicComponentModule { }
