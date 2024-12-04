import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { DevRoutingModule } from './dev-routing.module';
import { ProgressBarModule } from "primeng/progressbar";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { SharedModule } from "@/shared/shared.module";

import { LayoutComponent } from './layout/layout.component';
import { SkillsComponent } from './skills/skills.component';
import {Button, ButtonDirective} from "primeng/button";
import {ScrollPanelModule} from "primeng/scrollpanel";


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
    SharedModule,
    NgOptimizedImage,
    Button,
    ScrollPanelModule
  ]
})
export class DevModule { }
