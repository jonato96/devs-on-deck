import { Component, input } from '@angular/core';
import { FormControl } from "@angular/forms";

import { getErrorMessage } from "@/shared/utils/form-utils";


@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrl: './custom-control.component.scss'
})
export class CustomControlComponent {

  control = input<FormControl>();
  label = input.required<string>();
  labelSize = input<number>(125);

  getError(): string {
    return getErrorMessage(this.control()?.errors);
  }

}
