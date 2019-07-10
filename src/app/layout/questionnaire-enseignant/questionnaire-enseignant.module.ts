import { ListItemsModule } from 'app/layout/list-items/list-items.module';
import { QuestionnaireDirecteurModule } from './../questionnaire-directeur/questionnaire-directeur.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireEnseignantComponent} from './questionnaire-enseignant.component'


import { QuestionnaireEnseignantRoutingModule} from './questionnaire-enseignant-routing.module';
import { PageHeaderModule } from '../../shared';



import { InfoEcolesComponent } from '../info-ecoles/info-ecoles.component';


@NgModule({
    imports: [
        CommonModule,
       QuestionnaireEnseignantRoutingModule,
       ListItemsModule,
       QuestionnaireDirecteurModule,
        PageHeaderModule
    ],
    declarations: [QuestionnaireEnseignantComponent],
})
export class QuestionnaireEnseignantModule { }
