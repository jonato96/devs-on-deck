export interface Catalogue {
  id: number;
  name: string;
}
export interface State extends Catalogue {}

export interface City extends Catalogue {}

export interface DeveloperRequest {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  cityId: string;
  password: string;
}

export interface OrganizationRequest {
  orgName: string;
  email: string;
  address: string;
  cityId: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
