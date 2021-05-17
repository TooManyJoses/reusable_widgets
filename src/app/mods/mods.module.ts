import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModalComponent } from './modal/modal.component';
import { ModsContainerComponent } from './mods-container/mods-container.component';
import { SharedModule } from './../shared/shared.module';
import { AccordianComponent } from './accordian/accordian.component';


@NgModule({
  declarations: [
    ModalComponent,
    ModsContainerComponent,
    AccordianComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
