import { FormControl } from "@angular/forms";

export interface UserContainer {
  email: FormControl<string>;
  address: FormControl<string>;
  cityId: FormControl<number>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

export interface DeveloperRegister extends UserContainer {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
}

export interface OrganizationRegister extends UserContainer {
  orgName: FormControl<string>;
}

export interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}
