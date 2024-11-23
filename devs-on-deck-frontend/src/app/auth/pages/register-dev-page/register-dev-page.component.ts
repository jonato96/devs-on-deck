import { Component, inject, OnInit, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { DropdownChangeEvent } from "primeng/dropdown";

import { City, DeveloperData, DeveloperRegister, State } from "@/auth/models";

import { ValidatorsService } from "@/auth/services/validators.service";
import { CatalogueService } from "@/auth/services/catalogue.service";
import {AuthService, LocalKeys, LocalManagerService} from "@/auth/services";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register-dev-page',
  templateUrl: './register-dev-page.component.html',
  styleUrl: './register-dev-page.component.scss'
})
export class RegisterDevPageComponent implements OnInit {

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly catalogueService = inject(CatalogueService);
  private readonly validatorService = inject(ValidatorsService);
  private readonly authService = inject(AuthService);
  private readonly localManagerService = inject(LocalManagerService);
  private readonly router = inject(Router);

  public states = signal<State[]>([]);
  public cities = signal<City[]>([]);

  public registerDeveloperForm = this.fb.group<DeveloperRegister>({
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    address: this.fb.control('', [Validators.required]),
    cityId: this.fb.control(0, [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    confirmPassword: this.fb.control('', [Validators.required]),
  },
  {
    validators: [
      this.validatorService.isFieldOneEqualsFieldTwo('password','confirmPassword')
    ]
  }
  );

  ngOnInit() {
    this.catalogueService.findCountries().subscribe(states => this.states.set(states));
  }

  public updateCities(state: DropdownChangeEvent) {
    const selectedState = state.value as State;
    this.catalogueService.findCitiesByState(selectedState.id)
      .subscribe(cities => this.cities.set(cities));
  }

  onRegister(): void {
    if (this.registerDeveloperForm.valid) {
      const registerDeveloperRequest: DeveloperData = this.registerDeveloperForm.getRawValue();
      this.authService.registerDeveloper(registerDeveloperRequest)
        .subscribe( token => {
          this.localManagerService.setElement(LocalKeys.token, token);
          void this.router.navigate(['developer','skills']);
        });
    }
    this.registerDeveloperForm.markAllAsTouched();
  }

}
