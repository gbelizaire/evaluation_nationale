import { Injectable } from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { DomaineCognitif } from '../model/domaine-cognitif';
import { ConnexionService } from '../../login/connexion.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DomaineCognitifService{
  constructor(private _http:Http,private _connexionService:ConnexionService ){}
  domaineId:number =100;
  getAllDomaine():Observable<DomaineCognitif[]>{
    return this._http.get(this._connexionService.chemin+'/eval/api/domaine/listDomaineCognitif.php')
                 .map(response => <DomaineCognitif[]>response.json())
                 .do(data =>{
                     
                      console.log(data);
                      this.domaineId = data.length >0 ? data.length+1:0;
                  })
                 .catch(this.handleError);
  }

  getNextNumber(){
    return ++this.domaineId;
  }

  InsertDomaine(domaine){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(domaine);
    
    return this._http.post(this._connexionService.chemin+'/eval/api/domaine/addDomaine.php', body,{headers})
                 .map((res: Response) => res.json());
  }

  /**
   * Cette methode permet de supprimer un Domaine 
   * 
   * @param {any} domaine 
   * @returns 
   * @memberof DomaineCognitifService
   */
  deleteDomaine(domaine){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(domaine);
    
    return this._http.post(this._connexionService.chemin+'/eval/api/domaine/deleteDomaine.php', body,{headers})
                 .map((res: Response) => res.json());
  }

  private handleError(error: Response){
    console.error(error);
    let message = ` Code Statut Erreur ${error.status} at ${error.url}`;
   return Observable.throw(message);  
}
}