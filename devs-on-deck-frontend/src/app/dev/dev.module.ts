import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevRoutingModule } from './dev-routing.module';
import { ProgressBarModule } from "primeng/progressbar";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { SharedModule } from "@/shared/shared.module";

import { LayoutComponent } from './layout/layout.component';
import { SkillsComponent } from './skills/skills.component';
import { ButtonDirective } from "primeng/button";


@NgModule({
  declarations: [
    SkillsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DevRoutingModule,
    ProgressBarModule,
    InputTextModule,
    InputTextareaModule,
    ButtonDirective,
    SharedModule
  ]
})
export class DevModule { }
