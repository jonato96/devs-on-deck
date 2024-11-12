import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevRoutingModule } from './dev-routing.module';
import { SkillsComponent } from './skills/skills.component';
import {ProgressBarModule} from "primeng/progressbar";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonDirective} from "primeng/button";


@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    DevRoutingModule,
    ProgressBarModule,
    InputTextModule,
    InputTextareaModule,
    ButtonDirective
  ]
})
export class DevModule { }
