import { Component, inject, OnInit, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { DropdownChangeEvent } from "primeng/dropdown";

import { OrganizationRegister, OrganizationData, City, State } from "@/auth/models";

import { ValidatorsService } from "@/auth/services/validators.service";
import { CatalogueService } from "@/auth/services/catalogue.service";


@Component({
  selector: 'app-register-org-page',
  templateUrl: './register-org-page.component.html',
  styleUrl: './register-org-page.component.scss'
})
export class RegisterOrgPageComponent implements OnInit {

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly catalogueService = inject(CatalogueService);
  private readonly validatorService = inject(ValidatorsService);

  public states = signal<State[]>([]);
  public cities = signal<City[]>([]);

  public registerOrganizationForm = this.fb.group<OrganizationRegister>({
    orgName: this.fb.control('', [Validators.required]),
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

  public updateCities(state: DropdownChangeEvent): void {
    const selectedState = state.value as State;
    this.catalogueService.findCitiesByState(selectedState.id)
      .subscribe(cities => this.cities.set(cities));
  }

  public onRegister(): void {
    if (this.registerOrganizationForm.valid) {
      const registerOrganizationRequest: OrganizationData = this.registerOrganizationForm.getRawValue();
      console.log(registerOrganizationRequest);
    }
    this.registerOrganizationForm.markAllAsTouched();
  }

}
