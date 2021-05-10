import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsContainerComponent } from './elements-container/elements-container.component';

const routes: Routes = [{ path: 'elements', component: ElementsContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ElementsRoutingModule { }
