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
