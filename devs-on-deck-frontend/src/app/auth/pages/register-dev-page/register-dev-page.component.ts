import {Component, inject, OnInit, signal} from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { DeveloperRegister } from "../../../interfaces/register.interface";
import {DevsOnDeckService} from "../../../services/devs-on-deck.service";
import {City, State} from "../../../interfaces/devs-on-deck.interface";
import {DropdownChangeEvent} from "primeng/dropdown";

@Component({
  selector: 'app-register-dev-page',
  templateUrl: './register-dev-page.component.html',
  styleUrl: './register-dev-page.component.scss'
})
export class RegisterDevPageComponent implements OnInit {

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly devService = inject(DevsOnDeckService);

  public states = signal<State[]>([]);
  public cities = signal<City[]>([]);

  public registerDeveloperForm = this.fb.group<DeveloperRegister>({
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required]),
    address: this.fb.control('', [Validators.required]),
    cityId: this.fb.control(0, [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    confirmPassword: this.fb.control('', [Validators.required]),
  });

  ngOnInit() {
    this.devService.findCountries().subscribe(states => this.states.set(states));
  }

  public updateCities(state: DropdownChangeEvent) {
    const selectedState = state.value as State;
    this.devService.findCitiesByState(selectedState.id)
      .subscribe(cities => this.cities.set(cities));
  }

  onRegister() {
    const registerDeveloperRequest = this.registerDeveloperForm.value as unknown as DeveloperRegister;
    console.log(registerDeveloperRequest);
  }

}
