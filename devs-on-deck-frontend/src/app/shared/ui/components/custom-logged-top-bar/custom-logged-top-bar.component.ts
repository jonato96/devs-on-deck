import { Component, input } from '@angular/core';

@Component({
  selector: 'app-custom-logged-top-bar',
  templateUrl: './custom-logged-top-bar.component.html',
  styleUrl: './custom-logged-top-bar.component.scss'
})
export class CustomLoggedTopBarComponent {

  title = input.required<string>();

}
