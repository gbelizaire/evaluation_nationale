import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireEnseignantComponent } from "./questionnaire-enseignant.component";

// import { ListItemsComponent } from './list-items.component';

const routes: Routes = [
    { path: '', component: QuestionnaireEnseignantComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionnaireEnseignantRoutingModule { }