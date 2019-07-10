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
export class ItemsService{
  
    constructor(private _http:Http,private _connexionService:ConnexionService){}
critere:any ={"CodeEleve":'', "CodeMatiere":''};
   
     public getAllItems():Observable<SaiItem[]> {
         
         return this._http.get(this._connexionService.chemin+'/eval/api/item/listItems.php')
                 .map(response => <SaiItem[]>response.json())
                 .do(data =>{
                     
                      console.log(data);
                     // this.domaineId = data.length >0 ? data.length+1:0;
                  })
                 .catch(this.handleError);
    }
     InsertItem(item){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(item);
    if(this._connexionService.ModeExec !='prod'){
    console.log("##############################");
    console.log(body);
    console.log("##############################");
    }
    return this._http.post(this._connexionService.chemin+'/eval/api/item/addItem.php', body,{headers})
                 .map((res: Response) => res.json());
  }

  getAllSaiItems():Observable<SaiItem[]>{
    return this._http.get(this._connexionService.chemin+'/eval/api/item/listItemsWithPossibleReponse.php')
                 .map(response => <SaiItem[]>response.json())
                 .do(data =>{
                     
                    if(this._connexionService.ModeExec !='prod'){ console.log(data);}
                     // this.domaineId = data.length >0 ? data.length+1:0;
                  })
                 .catch(this.handleError);
  }

public getAllSaiItemsb(codeEleve,CodeMatiere,CodeNiveau):Observable<SaiItem[]>{
    //   this.critere ={"CodeEleve":codeEleve, "CodeMatiere":CodeMatiere,"CodeNiveau":CodeNiveau};
         var headers = new Headers();
        //  this.critere ={"CodeEleve":codeEleve, "CodeMatiere":CodeMatiere};
        this.critere ={"CodeEleve":codeEleve, "CodeMatiere":CodeMatiere,"CodeNiveau":CodeNiveau};
         console.log('Nouvelle Critere',this.critere);
    headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(this.critere);
     return this._http.post(this._connexionService.chemin+'/eval/api/item/listItemsWithPossibleReponse.php', body,{headers})
                  .map((res: Response) =><SaiItem[]> res.json());

     }

 UpdateReponse(info){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(info);
    if(this._connexionService.ModeExec !='prod'){
    console.log("##############################");
    console.log(body);
    console.log("##############################");
    }
    return this._http.post(this._connexionService.chemin+'/eval/api/reponse/updateresponse.php', body,{headers})
                 .map((res: Response) => res.json())
                 .catch(this.handleError);;
  }

   private handleError(error: Response){
    if(this._connexionService.ModeExec !='prod'){ console.error(error);}
    let message = ` Code Statut Erreur ${error.status} at ${error.url}`;
   return Observable.throw(message);  
}
    
}