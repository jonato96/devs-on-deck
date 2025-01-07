import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Auth, AuthData, DeveloperData, LoginResponse, OrganizationData } from "@/auth/models";
import { AuthAdapter, RegisterAdapter } from "@/auth/adapters/auth.adapter";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = 'http://localhost:8080/devs';
  private readonly authController: string = 'auth';
  private readonly http = inject(HttpClient);

  login(request: AuthData): Observable<string> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/${this.authController}/login`, request)
      .pipe(
        map(AuthAdapter)
      );
  }

  registerDeveloper(request: DeveloperData): Observable<string> {
    return this.http.post<Auth>(`${this.baseUrl}/${this.authController}/register/dev`, request)
      .pipe(
        map(RegisterAdapter)
      );
  }

  registerOrganization(request: OrganizationData): Observable<string> {
    return this.http.post<Auth>(`${this.baseUrl}/${this.authController}/register/org`, request)
      .pipe(
        map(RegisterAdapter)
      );
  }

}
