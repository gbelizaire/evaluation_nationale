import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' }, 
            { path: 'list-items', loadChildren: './list-items/list-items.module#ListItemsModule'},
            { path: 'suivi', loadChildren: './suivi/suivi.module#SuiviModule'},
            { path: 'saisie-item', loadChildren: './saisie-item/saisie-item.module#SaisieItemModule'},
            { path: 'questionnaire-directeur', loadChildren: './questionnaire-directeur/questionnaire-directeur.module#QuestionnaireDirecteurModule'},
            { path: 'questionnaire-enseignant', loadChildren: './questionnaire-enseignant/questionnaire-enseignant.module#QuestionnaireEnseignantModule'},
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },

            
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
