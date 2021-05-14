import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModsContainerComponent } from './mods-container/mods-container.component';

const routes: Routes = [{ path: '', component: ModsContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ModsRoutingModule { }
