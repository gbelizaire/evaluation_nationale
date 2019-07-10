import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from './connexion.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(public router: Router, private _connexionService:ConnexionService) { }

    ngOnInit() {
        this._connexionService.getChemin().subscribe(p=>{
            console.log("Le chemin login est :",p.host);
        });
     }

    onLoggedin() {
        // localStorage.setItem('isLoggedin', 'true');
    }

    verifLogin(u,p){
      console.log("UserName :"+u, "Mot de passe :"+p);
         this._connexionService.verifConnection(u,p).subscribe(p=>{
             localStorage.setItem('isLoggedin', 'true');
             this.router.navigate(['charts']);
         });
    }

}
