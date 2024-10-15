import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {City, State} from "../interfaces/devs-on-deck.interface";

@Injectable({
  providedIn: 'root'
})
export class DevsOnDeckService {

  private readonly baseUrl: string = 'http://localhost:8080/devs';
  private readonly stateController: string = 'state';

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



}
