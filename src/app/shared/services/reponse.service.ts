import {Injectable} from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { SaiItem } from '../model/sai-item';

import {Item} from '../model/item';
import {PossibleReponse} from '../model/possible-reponse';
import {TypeDeQuestion} from '../model/type-de-question.enum';
import { Observable } from 'rxjs/Observable';


import { ConnexionService } from '../../login/connexion.service';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ReponseService {

  constructor(private _http:Http,private _connexionService:ConnexionService) { }

   UpdateReponse(info){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    let LibIEA= info.CodeItem.substr(0,2)+info.OrdreItem.replace(".","_");

    info.libiea=LibIEA;
    let body = JSON.stringify(info);
    if(this._connexionService.ModeExec !='prod'){
     console.log("##############################");
     console.log(LibIEA,"Update bb ",body);
     console.log("##############################");
   }
    return this._http.post(this._connexionService.chemin+'/eval/api/reponse/updateresponse.php', body,{headers})
                 .map((res: Response) => res.json())
                 .catch(this.handleError);;
  }


  public getStatGlobale():Observable<any[]> {
         
         return this._http.get(this._connexionService.chemin+'/eval/api/reponse/rapport.php')//this._connexionService.chemin+'/eval/api/reponse/statglobal.php')
                 .map(response => response.json())
                 .do(data =>{
                     
                   //   console.log(data);
                     // this.domaineId = data.length >0 ? data.length+1:0;
                  })
                 .catch(this.handleError);
    }

   private handleError(error: Response){
    if(this._connexionService.ModeExec !='prod'){ console.error(error);}
    let message = ` Code Statut Erreur ${error.status} at ${error.url}`;
   return Observable.throw(message);  
}

}
