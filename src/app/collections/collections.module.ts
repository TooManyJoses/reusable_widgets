import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsContainerComponent } from './collections-container/collections-container.component';


@NgModule({
  declarations: [
    CollectionsContainerComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports: [
    CollectionsContainerComponent,
  ],
})
export class CollectionsModule { }
