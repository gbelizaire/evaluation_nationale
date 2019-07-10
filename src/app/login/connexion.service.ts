import { Injectable,OnInit } from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class ConnexionService implements OnInit {
  public chemin:string="";
    NomUtilisateur:string;
       Mot2Pass:string;
          Nom:string;
             Prenom:string;
                Group_:string;
                  Can_Connect:boolean;
                    ModeExec:string;

  constructor(private _http:Http) { }
  ngOnInit(){
    this.getChemin();
  }
  getChemin(){
    //return this._http.get('/evaluation/assets/g.json')
    //return this._http.get('./../../assets/g.json')
  return this._http.get('assets/g.json')
                 .map(response => response.json())
                 .do(ch => {
                       
                             
                            this.chemin = ch.host;
                            this.ModeExec = ch.modeexec;
                            if(this.ModeExec !="prod") {console.log("Le chemin interne est :",ch.host);}
                           });
}

  estConnecte:boolean=false;
  //chemin:string="";
  role:string="";
  getStatus(){
    return this.estConnecte;
  }
critere:any={"NomUtilisateur":"","Mot2Pass":""};

  verifConnection(utilisateur:string, mot2passe:string):Observable<any>{
      this.critere.NomUtilisateur =utilisateur;
      this.critere.Mot2Pass=mot2passe;
         var headers = new Headers();
         headers.append('Content-Type', 'application/json; charset=utf-8');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(this.critere);
     return this._http.post(this.chemin+'/eval/api/utilisateur/verifConnection.php', body,{headers})
                  .map((res: Response) => res.json())
                  .do(ch=>{
                      if(ch.NomUtilisateur){
                         this.NomUtilisateur= ch.NomUtilisateur;
                           this.Mot2Pass=ch.Mot2Pass;
                               this.Nom=ch.Nom;
                                   this.Prenom=ch.Prenom;
                                       this.Group_=ch.Group_;
                                            this.Can_Connect= ch.Can_Connect;
                                              this.role = ch.Group_;
                                                this.estConnecte = ch.Can_Connect==1? true : false;
                                                if(this.ModeExec !="prod") {console.log(ch);}
                      }                          
                  });


    // if(utilisateur == "gbelizaire" && mot2passe =="bb"){
    //   this.estConnecte = true;
    //   this.role ="admin";
    //   return true;
    // }else if(utilisateur == "gg" && mot2passe =="bb"){
    //   this.estConnecte = true;
    //   this.role ="operateur";
    //   return true;
    // }else{
    //   this.estConnecte = false;
    //   this.role ="";
    //   return false;
    // }
  }

  deconnexion(){
     this.estConnecte = false;
      this.role ="";
  }


}
