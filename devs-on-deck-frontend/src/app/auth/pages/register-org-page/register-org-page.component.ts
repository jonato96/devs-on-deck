import {Component, inject, OnInit, signal} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {DevsOnDeckService} from "../../../services/devs-on-deck.service";
import {City, DeveloperRequest, OrganizationRequest, State} from "../../../interfaces/devs-on-deck.interface";
import {DeveloperRegister, OrganizationRegister} from "../../../interfaces/register.interface";
import {DropdownChangeEvent} from "primeng/dropdown";

@Component({
  selector: 'app-register-org-page',
  templateUrl: './register-org-page.component.html',
  styleUrl: './register-org-page.component.scss'
})
export class RegisterOrgPageComponent implements OnInit {

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly devService = inject(DevsOnDeckService);

  public states = signal<State[]>([]);
  public cities = signal<City[]>([]);

  public registerOrganizationForm = this.fb.group<OrganizationRegister>({
    orgName: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
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

  onRegister(): void {
    const registerOrganizationRequest = this.registerOrganizationForm.value as unknown as OrganizationRequest;
    console.log(registerOrganizationRequest);
  }

}
