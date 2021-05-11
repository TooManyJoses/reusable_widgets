import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AssociatedActsComponent } from './associated-acts/associated-acts.component';
import { BiographyComponent } from './biography/biography.component';
import { CollectionsContainerComponent } from './collections-container/collections-container.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsContainerComponent,
    children: [
      { path: '', component: BiographyComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'associated-acts', component: AssociatedActsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
