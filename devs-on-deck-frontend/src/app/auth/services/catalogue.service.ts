import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { City, State } from "@/auth/models/catalogue.model";


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private readonly baseUrl: string = 'http://localhost:8080/devs';
  private readonly stateController: string = 'state';

  private http = inject(HttpClient);

  /**
   * State Controller
   */

  findCountries(): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}/${this.stateController}`);
  }

  findCitiesByState(stateId: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.baseUrl}/${this.stateController}/${stateId}/cities`);
  }
}
