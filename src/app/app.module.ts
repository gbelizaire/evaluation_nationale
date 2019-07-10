import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { ConnexionService } from './login/connexion.service';

import { CollectableService } from './shared/services/collectable.service';
import { DomaineService } from './shared/services/domaine.service';
import {ItemsService} from './shared/services/items.service'
import { DomaineCognitifService } from './shared/services/domaine-cognitif.service';
import {DomaineContenuService} from './shared/services/domaine-contenu.service';
import {PossibleReponsebService} from './shared/services/possible-reponseb.service';
import { MatiereService } from './shared/services/matiere.service';
import { EleveServiceService } from "./shared/services/eleve-service.service";
import { EcoleServiceService } from "./shared/services/ecole-service.service";
import { ReponseService } from "./shared/services/reponse.service";
// import { InfoElevesComponent } from './info-eleves/info-eleves.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        // InfoElevesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [AuthGuard,ConnexionService,ReponseService,EleveServiceService,EcoleServiceService,PossibleReponsebService,CollectableService,DomaineService, ItemsService,DomaineCognitifService,DomaineContenuService,MatiereService],
    bootstrap: [AppComponent]
})
export class AppModule { }
