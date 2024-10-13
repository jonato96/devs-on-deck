import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

import { CustomTopBarComponent } from './ui/components/custom-top-bar/custom-top-bar.component';


@NgModule({
  declarations: [
    CustomTopBarComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    CustomTopBarComponent
  ]
})
export class SharedModule { }
