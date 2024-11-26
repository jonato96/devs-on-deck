import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgRoutingModule } from './org-routing.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    OrgRoutingModule
  ]
})
export class OrgModule { }
