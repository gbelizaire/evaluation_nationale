import { Injectable } from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { Matiere } from '../model/matiere';
import { Observable } from 'rxjs/Observable';

import { ConnexionService } from '../../login/connexion.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MatiereService{
  constructor(private _http:Http,private _connexionService:ConnexionService){}
  domaineId:number =100;
  getAllMatieres():Observable<Matiere[]>{
    //this._connexionService.getChemin().subscribe(p=>{});
    console.log("Valeur chemin",this._connexionService.chemin);
    return this._http.get(this._connexionService.chemin+'/eval/api/matiere/listMatiere.php')
                 .map(response => <Matiere[]>response.json())
                 .do(data =>{
                     
                  if(this._connexionService.ModeExec !='prod'){ console.log(data);}
                      this.domaineId = data.length >0 ? data.length+1:0;
                  })
                 .catch(this.handleError);
  }

  getNextNumber(){
    return ++this.domaineId;
  }

   private handleError(error: Response){
    if(this._connexionService.ModeExec !='prod'){console.error(error);}
    let message = ` Code Statut Erreur ${error.status} at ${error.url}`;
   return Observable.throw(message);  
}
}