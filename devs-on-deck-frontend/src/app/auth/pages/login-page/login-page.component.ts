import { Component, inject, OnInit, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { firstValueFrom } from "rxjs";

import { AuthService } from "@/auth/services/auth.service";
import { LocalKeys, LocalManagerService } from "@/auth/services";

import { LoginForm } from "@/auth/models/form.model";
import { LoginTitle } from "@/auth/models/login-title.model";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  private readonly authService = inject(AuthService);
  private readonly localManagerService = inject(LocalManagerService);
  private readonly router = inject(Router);
  private readonly fb = inject(NonNullableFormBuilder);

  loginForm = this.fb.group<LoginForm>({
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  })

  developer: LoginTitle = {
    title: 'Welcome Back, Developer!',
    subtitle: `Let's Connect You To A Job!`,
    oppositeUser: 'an Organization',
    oppositeUrl: '../org',
    redirectUrl: 'developer'

  }
  organization: LoginTitle = {
    title: 'Welcome Back!',
    subtitle: `Let's Find You Some Candidates!`,
    oppositeUser: 'a Developer',
    oppositeUrl: '../dev',
    redirectUrl: 'organization'
  }

  actualUser = signal<LoginTitle>(this.developer);

  ngOnInit() {
   if (this.router.url.endsWith('/org')) this.actualUser.set(this.organization);
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        await firstValueFrom(this.authService.login(this.loginForm.getRawValue()))
          .then( response => {
            this.localManagerService.setElement(LocalKeys.token, response.token);
            this.router.navigateByUrl(this.actualUser().redirectUrl); // to do
          });
      } catch (error) {
        console.error(error);
      }
      this.loginForm.reset();
    }
    this.loginForm.markAllAsTouched()
  }

}
