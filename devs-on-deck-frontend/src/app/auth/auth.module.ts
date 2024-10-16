import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from "../shared/shared.module";

import { AuthRegisterLayoutComponent } from './layouts/auth-register-layout/auth-register-layout.component';
import { AuthLoginLayoutComponent } from './layouts/auth-login-layout/auth-login-layout.component';
import { RegisterDevPageComponent } from './pages/register-dev-page/register-dev-page.component';
import { RegisterOrgPageComponent } from './pages/register-org-page/register-org-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {CheckboxModule} from "primeng/checkbox";
import {ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RegisterDevPageComponent,
    RegisterOrgPageComponent,
    LoginPageComponent,
    AuthRegisterLayoutComponent,
    AuthLoginLayoutComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        CheckboxModule,
        ButtonDirective,
        Ripple,
        InputTextModule,
        DropdownModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
