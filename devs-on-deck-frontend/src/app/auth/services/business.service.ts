import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { ApiResponse } from "@/auth/models";
import { SkillModel } from "@/dev/models/SkillModel";

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private readonly baseUrl: string = 'http://localhost:8080/devs';
  private readonly authController: string = 'skills';
  private readonly http = inject(HttpClient);

  saveSkills(request: SkillModel): Observable<string> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/${this.authController}`, request)
      .pipe(
        map( resp => resp.data )
      );
  }

}
