import {Injectable} from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';

import { Infecole } from '../model/infecole';

import { Observable } from 'rxjs/Observable';
import { ConnexionService } from '../../login/connexion.service';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class EcoleServiceService {

  constructor(private _http:Http,private _connexionService:ConnexionService){}
  public getInfoEcole(CodeEleve):Observable<Infecole>{
      var headers = new Headers();
 headers.append('Content-Type', 'application/json; charset=utf-8');
 //headers.append('Access-Control-Allow-Origin','*');

 // let headers = new Headers({ 'Content-Type': 'application/json' });
 let options = new RequestOptions({ headers: headers });
 let body = JSON.stringify(CodeEleve);
 console.log("Ecole-Service ==>",body);
  return this._http.post(this._connexionService.chemin+'/eval/api/eleve/FindEcole.php', body,{headers})
               .map((res: Response) => res.json());

  }

}
