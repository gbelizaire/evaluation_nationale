import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviComponent } from './suivi.component'


import { SuiviRoutingModule } from './suivi-routing.module';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [
        CommonModule,
       SuiviRoutingModule,
        PageHeaderModule
    ],
    declarations: [SuiviComponent],
})
export class SuiviModule { }
