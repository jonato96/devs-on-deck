import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegisterDevPageComponent } from "./pages/register-dev-page/register-dev-page.component";
import { AuthRegisterLayoutComponent } from "./layouts/auth-register-layout/auth-register-layout.component";
import { RegisterOrgPageComponent } from "./pages/register-org-page/register-org-page.component";
import { AuthLoginLayoutComponent } from "./layouts/auth-login-layout/auth-login-layout.component";

const routes: Routes = [
  {
    path: 'login',
    component: AuthLoginLayoutComponent,
    children: [
      { path: 'dev', component: LoginPageComponent },
      { path: 'org', component: LoginPageComponent },
      { path: '**', redirectTo: 'dev' },
    ]
  },
  {
    path: 'register',
    component: AuthRegisterLayoutComponent,
    children: [
      { path: 'dev', component: RegisterDevPageComponent },
      { path: 'org', component: RegisterOrgPageComponent },
      { path: '**', redirectTo: 'dev' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
