import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsContainerComponent } from './collections-container/collections-container.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { AlbumsComponent } from './albums/albums.component';
import { AssociatedActsComponent } from './associated-acts/associated-acts.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    CollectionsContainerComponent,
    TableComponent,
    BiographyComponent,
    AlbumsComponent,
    AssociatedActsComponent,
    TabsComponent,
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
