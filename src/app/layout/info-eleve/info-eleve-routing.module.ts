import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoEleveComponent } from './info-eleve.component';

const routes: Routes = [
    { path: '', component: InfoEleveComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InfoEleveRoutingModule { }
