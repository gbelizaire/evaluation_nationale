import { ListItemsModule } from 'app/layout/list-items/list-items.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { PageHeaderModule } from '../../shared';
import { InfoEcolesComponent } from '../info-ecoles/info-ecoles.component';
/* import { ChampsSaisieComponent } from '../champs-saisie/champs-saisie.component';
 import { ChampsSelectComponent } from '../champs-select/champs-select.component';
*/


import { QuestionnaireDirecteurComponent } from './questionnaire-directeur.component';
import { QuestionnaireDirecteurRoutingModule} from './questionnaire-directeur-routing.module';




@NgModule({
    imports: [
        CommonModule,
        QuestionnaireDirecteurRoutingModule,
        ListItemsModule,
        PageHeaderModule
    ],
    exports:[
        InfoEcolesComponent
    ],
   /* declarations: [QuestionnaireDirecteurComponent,InfoEcolesComponent,ChampsSaisieComponent,ChampsSelectComponent],*/
   declarations: [QuestionnaireDirecteurComponent,InfoEcolesComponent],

})
export class QuestionnaireDirecteurModule { }
