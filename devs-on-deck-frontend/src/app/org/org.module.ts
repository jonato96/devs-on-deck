import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgRoutingModule } from './org-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from "@/shared/shared.module";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    OrgRoutingModule,
    SharedModule
  ]
})
export class OrgModule { }
