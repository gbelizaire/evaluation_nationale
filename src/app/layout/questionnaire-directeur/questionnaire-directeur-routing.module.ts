import { QuestionnaireDirecteurComponent } from './questionnaire-directeur.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// import { ListItemsComponent } from './list-items.component';

const routes: Routes = [
    { path: '', component: QuestionnaireDirecteurComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionnaireDirecteurRoutingModule { }