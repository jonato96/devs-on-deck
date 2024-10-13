import { Component, Input } from '@angular/core';
import { ActionLink } from "../../../interfaces/action-link.interface";

@Component({
  selector: 'shared-custom-top-bar',
  templateUrl: './custom-top-bar.component.html',
  styleUrl: './custom-top-bar.component.scss'
})
export class CustomTopBarComponent {

  @Input()
  title: string = "💻 DevsOnDeck";

  @Input()
  links: ActionLink[] = [];

}
