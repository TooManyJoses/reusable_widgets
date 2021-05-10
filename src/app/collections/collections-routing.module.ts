import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsContainerComponent } from './collections-container/collections-container.component';

const routes: Routes = [{ path: '', component: CollectionsContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
