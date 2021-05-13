import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsContainerComponent } from './views-container/views-container.component';

const routes: Routes = [{ path: '', component: ViewsContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
