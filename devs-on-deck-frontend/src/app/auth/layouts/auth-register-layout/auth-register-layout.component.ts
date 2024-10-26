import { Component } from '@angular/core';
import { ActionLink } from "@/shared/interfaces/action-link.interface";

@Component({
  selector: 'app-auth-register-layout',
  templateUrl: './auth-register-layout.component.html',
  styleUrl: './auth-register-layout.component.scss'
})
export class AuthRegisterLayoutComponent {

  public interestLinks: ActionLink[] = [
    {
      name: 'Dev Login',
      link: '../login/dev'
    },
    {
      name: 'Org Login',
      link: '../login/org'
    }
  ]

}
