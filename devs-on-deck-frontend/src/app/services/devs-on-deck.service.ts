import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  City,
  DeveloperRequest,
  LoginRequest,
  OrganizationRequest,
  State,
  TokenResponse
} from "../interfaces/devs-on-deck.interface";

@Injectable({
  providedIn: 'root'
})
export class DevsOnDeckService {

  private readonly baseUrl: string = 'http://localhost:8080/devs';
  private readonly stateController: string = 'state';
  private readonly authController: string = 'auth';

  private http = inject(HttpClient);

  /**
   * Country Controller
   */

  findCountries(): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}/${this.stateController}`);
  }

  findCitiesByState(stateId: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.baseUrl}/${this.stateController}/${stateId}/cities`);
  }

  /**
   * Auth Controller
   */

  registerDeveloper(request: DeveloperRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.baseUrl}/${this.authController}/dev`, request);
  }

  registerOrganization(request: OrganizationRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.baseUrl}/${this.authController}/org`, request);
  }

  login(request: LoginRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.baseUrl}/${this.authController}/login`, request);
  }



}
