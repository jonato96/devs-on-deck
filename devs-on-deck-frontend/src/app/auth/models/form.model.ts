import { FormControl } from "@angular/forms";

export interface DeveloperRegister {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  address: FormControl<string>;
  cityId: FormControl<number>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

export interface OrganizationRegister {
  orgName: FormControl<string>;
  email: FormControl<string>;
  address: FormControl<string>;
  cityId: FormControl<number>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

export interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}
