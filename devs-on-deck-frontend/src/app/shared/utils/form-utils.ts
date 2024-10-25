import { ValidationErrors } from "@angular/forms";

const ERRORS_DEFAULT: ValidationErrors = {
  required: 'This field is required',
  email: 'Email does not match the format',
  notEqual: 'Password does not match'
};

export const getErrorMessage = (errors: ValidationErrors | null | undefined): string => {

  if (!errors) return '';
  const keyError = Object.keys(errors!)[0];
  if (errors[keyError] === true) return ERRORS_DEFAULT[keyError];
  return errors![keyError] || '';

}
