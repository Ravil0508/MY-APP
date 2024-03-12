import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {AuthComponent} from "./auth.component";


@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule
  ],
  exports:[
    AuthComponent,

  ]
})
export class AuthModule { }
