import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { InfoEleveRoutingModule } from './info-eleve-routing.module';
import { InfoEleveComponent } from './info-eleve.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        InfoEleveRoutingModule,
        PageHeaderModule
    ],
    declarations: [InfoEleveComponent]
})
export class InfoEleveModule { }




