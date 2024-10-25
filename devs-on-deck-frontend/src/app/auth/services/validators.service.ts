import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public isFieldOneEqualsFieldTwo(fieldOne: string, fieldTwo: string) {
    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      const fieldValueOne = formGroup.get(fieldOne)?.value;
      const fieldValueTwo = formGroup.get(fieldTwo)?.value;
      if (fieldValueOne !== fieldValueTwo) {
        formGroup.get(fieldTwo)?.setErrors({notEqual: true});
        return {
          notEqual: true
        }
      }
      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    }
  }

}
