import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsContainerComponent } from './elements-container/elements-container.component';


@NgModule({
  declarations: [
    ElementsContainerComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
})
export class ElementsModule { }
