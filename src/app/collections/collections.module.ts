import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsContainerComponent } from './collections-container/collections-container.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    CollectionsContainerComponent,
    TableComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
  ],
  exports: [
    CollectionsContainerComponent,
  ],
})
export class CollectionsModule { }
