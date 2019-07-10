import {Injectable} from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';

import { InfoEleve } from '../model/infoEleve';

import { Observable } from 'rxjs/Observable';
import { ConnexionService } from '../../login/connexion.service';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
/**
 *    id:number;
  codeItem:string;
  CodeMatiere:string;
  text:string;
  type_ :TypeDeQuestion;
  posssible_reponses:PossibleReponse[];
  reponse:string;
 */

@Injectable()
export class EleveService{
  
    constructor(private _http:Http,private _connexionService:ConnexionService){}
     public getInfoEleve(CodeEleve):Observable<InfoEleve>{
         var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Origin','*');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(CodeEleve);
     return this._http.post(this._connexionService.chemin+'/eval/api/eleve/FindEleve.php', body,{headers})
                  .map((res: Response) => res.json());

     }
   
//      public getAllItems():Observable<SaiItem[]> {
         
//          return this._http.get(this._connexionService.chemin+'/eval/api/item/listItems.php')
//                  .map(response => <SaiItem[]>response.json())
//                  .do(data =>{
                     
//                       console.log(data);
//                      // this.domaineId = data.length >0 ? data.length+1:0;
//                   })
//                  .catch(this.handleError);
//     }
//      InsertItem(item){
//     var headers = new Headers();
//     headers.append('Content-Type', 'application/json; charset=utf-8');

//     // let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     let body = JSON.stringify(item);
//     console.log("##############################");
//     console.log(body);
//     console.log("##############################");
//     return this._http.post(this._connexionService.chemin+'/eval/api/item/addItem.php', body,{headers})
//                  .map((res: Response) => res.json());
//   }

//   getAllSaiItems():Observable<SaiItem[]>{
//     return this._http.get(this._connexionService.chemin+'/eval/api/item/listItemsWithPossibleReponse.php')
//                  .map(response => <SaiItem[]>response.json())
//                  .do(data =>{
                     
//                       console.log(data);
//                      // this.domaineId = data.length >0 ? data.length+1:0;
//                   })
//                  .catch(this.handleError);
//   }
   private handleError(error: Response){
    if(this._connexionService.ModeExec !='prod'){ console.error(error);}
    let message = ` Code Statut Erreur ${error.status} at ${error.url}`;
   return Observable.throw(message);  
}
    
}