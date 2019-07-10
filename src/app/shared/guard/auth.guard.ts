import { CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot,Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
// import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
//import { ConnexionService } from "app/login/connexion.service";
// import { CanActivate } from '@angular/router';
// import { Router } from '@angular/router';
//  import { ConnexionService } from '../../login/connexion.service;
//import { ConnexionService } from "./src/app/layout/login/connexion.service;";
//import { ConnexionService } from "./../../login/connexion.service";
import { ConnexionService } from "./../../login/connexion.service";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private _connexionService:ConnexionService) { }

     canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | boolean{
      if (this._connexionService.estConnecte){ return true;}
       if(!this._connexionService.estConnecte){ 
        //    this.router.navigate(['/connexion']);
           this.router.navigate(['/login']);
         return false;    
    }
       //return this._connexionService.estConnecte;
   }

    // canActivate() {
    //     if (localStorage.getItem('isLoggedin')) {
    //         return true;
    //     }

    //     this.router.navigate(['/login']);
    //     return false;
    // }
}
