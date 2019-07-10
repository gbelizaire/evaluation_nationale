import { Injectable } from '@angular/core';
import { Http , Response,Headers,RequestOptions,URLSearchParams} from '@angular/http';
import { SaiItem } from '../model/sai-item';

import {Item} from '../model/item';
import {PossibleReponseb} from '../model/possible-reponseb';
import {TypeDeQuestion} from '../model/type-de-question.enum';
import { Observable } from 'rxjs/Observable';

import { ConnexionService } from '../../login/connexion.service';

@Injectable()
export class PossibleReponsebService {

  constructor(private _http:Http,private _connexionService:ConnexionService) { }
   InsertPossibleReponse(_possiblereponse){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(_possiblereponse);
    if(this._connexionService.ModeExec !='prod'){
     console.log("##############################");
     console.log(body);
     console.log("##############################");
    }
    return this._http.post(this._connexionService.chemin+'/eval/api/possiblereponse/addPossibleReponse.php', body,{headers})
                 .map((res: Response) => <PossibleReponseb>res.json()).catch(this.handleError);;
  }
  getPossibleReponseByItem(_item:Item):Observable<PossibleReponseb[]>{
  
   var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(_item);
    if(this._connexionService.ModeExec !='prod'){
    console.log("##############################");
    console.log(body);
    console.log("##############################");
    }
    return this._http.post(this._connexionService.chemin+'/eval/api/possiblereponse/getPossibleReponseforItem.php', body,{headers})
                 .map((res: Response) => <PossibleReponseb[]>res.json()).catch(this.handleError);
 }


   private handleError(error: Response){
    if(this._connexionService.ModeExec !='prod'){console.error(error);}
     let message = ` Code Statut Erreur ${error.status} at ${error.url}`;
     return Observable.throw(message);  
   }

}
