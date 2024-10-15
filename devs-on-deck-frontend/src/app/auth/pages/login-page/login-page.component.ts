import {Component, inject, OnInit, signal} from '@angular/core';
import {LoginTitle} from "../../../interfaces/login-title.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  private readonly router = inject(Router);

  developer: LoginTitle = {
    title: 'Welcome Back, Developer!',
    subtitle: `Let's Connect You To A Job!`,
    oppositeUser: 'an Organization',
    oppositeUrl: '../org',

  }
  organization: LoginTitle = {
    title: 'Welcome Back!',
    subtitle: `Let's Find You Some Candidates!`,
    oppositeUser: 'a Developer',
    oppositeUrl: '../dev',
  }

  actualUser = signal<LoginTitle>(this.developer);

  ngOnInit() {
   if (this.router.url.endsWith('/org')) this.actualUser.set(this.organization);
  }

}
