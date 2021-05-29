import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const useFullModules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  HttpClientModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...useFullModules
  ]
})
export class SharedModule { }
