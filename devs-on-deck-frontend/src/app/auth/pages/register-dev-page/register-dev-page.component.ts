import { Component, inject, OnInit, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { DropdownChangeEvent } from "primeng/dropdown";

import { DeveloperRegister } from "@/auth/models";
import { City, State } from "@/interfaces/devs-on-deck.interface";

import { DevsOnDeckService } from "@/services/devs-on-deck.service";
import { DeveloperData } from "@/auth/models";
import {ValidatorsService} from "@/auth/services/validators.service";


@Component({
  selector: 'app-register-dev-page',
  templateUrl: './register-dev-page.component.html',
  styleUrl: './register-dev-page.component.scss'
})
export class RegisterDevPageComponent implements OnInit {

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly devService = inject(DevsOnDeckService);
  private readonly validatorService = inject(ValidatorsService);

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
    this.devService.findCountries().subscribe(states => this.states.set(states));
  }

  public updateCities(state: DropdownChangeEvent) {
    const selectedState = state.value as State;
    this.devService.findCitiesByState(selectedState.id)
      .subscribe(cities => this.cities.set(cities));
  }

  onRegister(): void {
    if (this.registerDeveloperForm.valid) {
      const registerDeveloperRequest: DeveloperData = this.registerDeveloperForm.getRawValue();
      console.log(registerDeveloperRequest);
    }
    this.registerDeveloperForm.markAllAsTouched();
  }

}
