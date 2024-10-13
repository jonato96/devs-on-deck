import { Component } from '@angular/core';
import {ActionLink} from "../../../shared/interfaces/action-link.interface";

@Component({
  selector: 'app-auth-login-layout',
  templateUrl: './auth-login-layout.component.html',
  styleUrl: './auth-login-layout.component.scss'
})
export class AuthLoginLayoutComponent {

  public interestLinks: ActionLink[] = [
    {
      name: 'Dev Registration',
      link: '../register/dev'
    },
    {
      name: 'Org Registration',
      link: '../register/org'
    }
  ]

}
