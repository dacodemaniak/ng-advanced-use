import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

const useFullModules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  HttpClientModule
];

const primeModules = [
  InputTextModule,
  PasswordModule,
  ButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    //CommonModule
  ],
  exports: [
    ...useFullModules,
    ...primeModules
  ]
})
export class SharedModule { }
