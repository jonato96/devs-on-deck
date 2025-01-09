import { Component, inject, input } from '@angular/core';
import { LocalManagerService } from "@/auth/services";
import { Router } from "@angular/router";

@Component({
  selector: 'app-custom-logged-top-bar',
  templateUrl: './custom-logged-top-bar.component.html',
  styleUrl: './custom-logged-top-bar.component.scss'
})
export class CustomLoggedTopBarComponent {

  private readonly managerService = inject(LocalManagerService);
  private readonly router = inject(Router);
  title = input<string>();

  logout() {
    this.managerService.clearStorage();
    void this.router.navigateByUrl('/auth/login/dev');
  }

}
