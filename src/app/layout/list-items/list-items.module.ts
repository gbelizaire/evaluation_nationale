import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { ListItemsRoutingModule } from './list-items-routing.module';
import { ListItemsComponent } from './list-items.component';
import { PageHeaderModule } from '../../shared';
import { InfoElevesComponent } from '../info-eleves/info-eleves.component';
 import { ChampsSaisieComponent } from '../champs-saisie/champs-saisie.component';
 import { ChampsSelectComponent } from '../champs-select/champs-select.component';
//,//,ChampsSaisieComponent,ChampsSelectComponent]

@NgModule({
    imports: [
        CommonModule,
        ListItemsRoutingModule,
        PageHeaderModule
    ],
    exports:[
        ChampsSaisieComponent,
        ChampsSelectComponent
    ],
    declarations: [ListItemsComponent,InfoElevesComponent,ChampsSaisieComponent,ChampsSelectComponent],
})
export class ListItemsModule { }
