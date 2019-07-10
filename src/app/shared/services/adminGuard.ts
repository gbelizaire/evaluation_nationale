import { CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot,Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { ConnexionService } from '../../login/connexion.service'

@Injectable()
export class AdminGuard implements CanActivate{
    
   constructor(private _connexionService:ConnexionService,private router:Router){}
   
   canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | boolean{
        if(this._connexionService.role !="admin"){ this.router.navigate(['/collection']);}
       return this._connexionService.role =="admin";
   // return undefined;
   }
}