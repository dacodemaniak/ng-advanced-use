import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnonymousComponent } from './components/anonymous/anonymous.component';
import { RegisteredComponent } from './components/registered/registered.component';



@NgModule({
  declarations: [
    AnonymousComponent,
    RegisteredComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DynamicComponentModule { }
