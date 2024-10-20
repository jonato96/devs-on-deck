import { Component, input } from '@angular/core';

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrl: './custom-control.component.scss'
})
export class CustomControlComponent {

  label = input.required<string>();
  labelSize = input<number>(120);
  errorMsg = input<string>("");

}
