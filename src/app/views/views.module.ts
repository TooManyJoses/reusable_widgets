import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsContainerComponent } from './views-container/views-container.component';
import { SharedModule } from './../shared/shared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    ViewsContainerComponent,
    StatisticsComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
  ],
})
export class ViewsModule { }
