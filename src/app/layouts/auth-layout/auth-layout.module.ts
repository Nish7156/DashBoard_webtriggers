import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RegisterComponent } from '../../pages/register/register.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SuccessComponent } from 'src/app/dilogbox/success.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
     NgbModule,
     ReactiveFormsModule,
     MaterialModule
  ],
  declarations: [
    RegisterComponent,
  ]
})
export class AuthLayoutModule { }
