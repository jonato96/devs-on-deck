interface TokenContainer {
  token: string;
}

export interface LoginResponse extends TokenContainer { }
export interface Auth extends TokenContainer { }

export interface AuthData {
  email: string;
  password: string;
}

interface RegisterContainerData {
  email: string;
  address: string;
  cityId: number;
  password: string;
}

export interface DeveloperData extends RegisterContainerData {
  firstName: string;
  lastName: string;
}

export interface OrganizationData extends RegisterContainerData {
  orgName: string;
}

export interface ApiResponse {
  code: string;
  info: string;
  data: any;
}
