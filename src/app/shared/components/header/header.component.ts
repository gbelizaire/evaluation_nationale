import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ConnexionService } from '../../../login/connexion.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    nomComplet:string="";
    constructor(private translate: TranslateService,private _connexionService:ConnexionService) { }

    ngOnInit() {
        this.nomComplet = this._connexionService.Nom;
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this._connexionService.deconnexion();
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
