import { Injectable } from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { Domaine } from './domaine.model';
import { Observable } from 'rxjs/Observable';
import { ConnexionService } from '../../login/connexion.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DomaineService{
  constructor(private _http:Http,private _connexionService:ConnexionService){}
  domaineId:number =100;
  getAllDomaine():Observable<Domaine[]>{
    return this._http.get(this._connexionService.chemin+'/eval/api/domaine/listDomaine.php')
                 .map(response => <Domaine[]>response.json())
                 .do(data =>{
                     
                  if(this._connexionService.ModeExec !='prod'){  console.log(data);}
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
    if(this._connexionService.ModeExec !='prod'){console.error(error);}
    let message = ` Code Statut Erreur ${error.status} at ${error.url}`;
   return Observable.throw(message);  
}
}