import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { ApiResponse, City, Framework, Languages, State } from "@/auth/models";
import { cityAdapter, frameworksAdapter, languagesAdapter, stateAdapter } from "@/auth/adapters/auth.adapter";


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private readonly baseUrl: string = 'http://localhost:8080/devs';
  private readonly stateController: string = 'state';
  private readonly languagesController: string = 'languages';
  private readonly frameworkController: string = 'frameworks';

  private http = inject(HttpClient);

  /**
   * State Controller
   */

  findCountries(): Observable<State[]> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/${this.stateController}`).pipe(
      map(stateAdapter)
    );
  }

  findCitiesByState(stateId: number): Observable<City[]> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/${this.stateController}/${stateId}/cities`).pipe(
      map( cityAdapter )
    );
  }

  /**
   * Languages Controller
   */

  findLanguages(): Observable<Languages[]> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/${this.languagesController}`).pipe(
      map( languagesAdapter )
    );
  }

  findFrameworks(languagesIdList: number[]): Observable<Framework[]> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/${this.frameworkController}`, languagesIdList)
      .pipe(
        map( frameworksAdapter )
      );
  }

}
