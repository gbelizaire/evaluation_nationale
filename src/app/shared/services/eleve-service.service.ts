import { Injectable } from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConnexionService } from '../../login/connexion.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { InfoEleve } from '../model/infoEleve';

@Injectable()
export class EleveServiceService {

  constructor(private _http:Http, private _connexionService:ConnexionService) { }
   public getInfoEleve(CodeEleve):Observable<InfoEleve>{
         var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(CodeEleve);
     return this._http.post(this._connexionService.chemin+'/eval/api/eleve/FindEleve.php', body,{headers})
                  .map((res: Response) => res.json());

     }

    public getEleveParEcole(CodeEcole,CodeNiveau,num_Salle):Observable<any>{
      var critere ={"CodeEcole":CodeEcole, "CodeNiveau":CodeNiveau,"num_Salle":num_Salle};
      
         var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(critere);
     return this._http.post(this._connexionService.chemin+'/eval/api/suiviEleve/getEleveParEcole.php', body,{headers})
                  .map((res: Response) => res.json());

     }

     public updateSuivi_eleve(CodeEleve,CodeMatiere,Valeur):Observable<any>{
      var critere ={"Code_Eleve":CodeEleve, "Code_Matiere":CodeMatiere,"Valeur":Valeur};
      
         var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(critere);
     return this._http.post(this._connexionService.chemin+'/eval/api/suiviEleve/updateSuivi.php', body,{headers})
                  .map((res: Response) => res.json());

     }


}
