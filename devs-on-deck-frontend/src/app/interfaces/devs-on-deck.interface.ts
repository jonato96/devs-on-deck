export interface State {
  id: number;
  name: string;
}

export interface City {
  id: number;
  name: string;
}

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
