//import { ListItemsComponent } from '../../../../src_old/app/layout/list-items/list-items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemsComponent } from './list-items.component';
import { ListItemsModule } from 'app/layout/list-items/list-items.module';

const routes: Routes = [
    { path: '', component: ListItemsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListItemsRoutingModule { }