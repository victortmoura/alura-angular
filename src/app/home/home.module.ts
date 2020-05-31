import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './singup/signup.component';

@NgModule({
    declarations: [
        SigninComponent,
        SignUpComponent
    ], 
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        FormsModule
    ]
})
export class HomeModule { }