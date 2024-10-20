import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

import { CustomTopBarComponent } from './ui/components/custom-top-bar/custom-top-bar.component';
import { CustomControlComponent } from './ui/components/custom-control/custom-control.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    CustomTopBarComponent,
    CustomControlComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        FormsModule,
        InputTextModule,
        ReactiveFormsModule
    ],
  exports: [
    CustomTopBarComponent,
    CustomControlComponent
  ]
})
export class SharedModule { }
