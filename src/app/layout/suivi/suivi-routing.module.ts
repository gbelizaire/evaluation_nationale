import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuiviComponent } from "./suivi.component";

// import { ListItemsComponent } from './list-items.component';

const routes: Routes = [
    { path: '', component: SuiviComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SuiviRoutingModule { }