import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsContainerComponent } from './elements-container/elements-container.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';


@NgModule({
  declarations: [
    ElementsContainerComponent,
    PlaceholderComponent,
    TimesDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
})
export class ElementsModule { }
