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
  cityId: string;
  password: string;
}

export interface DeveloperData extends RegisterContainerData {
  firstName: string;
  lastName: string;
}

export interface OrganizationData extends RegisterContainerData {
  orgName: string;
}
