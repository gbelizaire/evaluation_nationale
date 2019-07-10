import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SaisieItemComponent } from './saisie-item.component'


import { SaisieItemRoutingModule } from './saisie-item-routing.module';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [
        CommonModule,
       SaisieItemRoutingModule,
       FormsModule,
        PageHeaderModule
    ],
    declarations: [SaisieItemComponent],
})
export class SaisieItemModule { }
