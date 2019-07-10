import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaisieItemComponent } from "./saisie-item.component";

// import { ListItemsComponent } from './list-items.component';

const routes: Routes = [
    { path: '', component: SaisieItemComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SaisieItemRoutingModule { }