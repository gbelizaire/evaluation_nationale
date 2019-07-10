import { Component, OnInit } from '@angular/core';
import { TypeDeQuestion } from '../../shared/model/type-de-question.enum';

import { PossibleReponse } from '../../shared/model/possible-reponse';
import {Item} from '../../shared/model/item';
import {SaiItem} from '../../shared/model/sai-item';

import { DomaineCognitif } from '../../shared/model/domaine-cognitif';
import { DomaineContenu } from '../../shared/model/domaine-contenu';

import { PossibleReponseb } from '../../shared/model/possible-reponseb';
import { SaiListItem } from '../../shared/model/sai-list-items';
import { ChampsSelectComponent } from '../champs-select/champs-select.component';
import { Matiere } from '../../shared/model/matiere';
import { Eleve } from '../../shared/model/eleve';
import { InfoEleve } from '../../shared/model/infoEleve';
import { MatiereService } from '../../shared/services/matiere.service';
import { EleveService } from '../../shared/services/eleve.service';
import { EleveServiceService } from "../../shared/services/eleve-service.service";
import { ReponseService } from "../../shared/services/reponse.service";
import { ItemsService } from '../../shared/services/items.service';
import { PossibleReponsebService } from '../../shared/services/possible-reponseb.service';
import { DomaineCognitifService } from '../../shared/services/domaine-cognitif.service';
import { DomaineContenuService } from '../../shared/services/domaine-contenu.service';

@Component({
  selector: 'app-saisie-item',
  templateUrl: './saisie-item.component.html',
  styleUrls: ['./saisie-item.component.scss']
})
export class SaisieItemComponent implements OnInit {
  
 
  
  
  SaiItemEnCours:SaiItem;
   MatiereCourante:Matiere;
   lesMatieres :Matiere[];
   lesSaiItems :SaiItem[];
   copielesSaiItems :SaiItem[];
   lesSaiItemsTempon :SaiItem[];
   lesDomainesCognitifs :DomaineCognitif[];
   lesDomainesContenus:DomaineContenu[];
   errorMessage:string;
    lesPossibleReponses:PossibleReponseb[];
    PossibleReponsebEnCours:PossibleReponseb;
    nbItem:number=0;
    CodeNiveau:number;
    konbyen:number;
    affichePossibleReponse:boolean = false;
   itemCourant:Item={ id:0,
            codeItem:'',
            CodeMatiere:'',
            text:'',
            type_ :1,
            posssible_reponses:[],
            reponse:''
          };
      itemCourantTempon:SaiItem;
  constructor(private _possibleReponsebService:PossibleReponsebService,private _itemsService:ItemsService,private _matiereService:MatiereService,private _domaineContenuService:DomaineContenuService,private _domaineCognitifService:DomaineCognitifService) { }

  ngOnInit() {


console.log('#################################################');
this.getAllSaiItems();
    this.getMatieres();
     this.getDomaineContenu();
      this.getDomaineCognitif();
      this.SaiItemEnCours= {Ordre:this.nbItem++,CodeItem:'',CodeMatiere:'',Question:'',CodeDomCogn:'',CodeDomCont:'',Qcm:0};
      //{Ordre:1,CodeItem:'',CodeMatiere:'Fr',Question:'Quel est la capitale de Haiti',CodeDomCogn:'DCOG03',CodeDomCont:'DCON05',Qcm:0};
     console.log(this.SaiItemEnCours);  
}
initItemCourant(){
  this.itemCourant={ id:0,
            codeItem:'',
            CodeMatiere:'',
            text:'',
            type_ :1,
            posssible_reponses:[],
            reponse:''
          };
}

 filterIt(){
   //alert(this.SaiItemEnCours.CodeMatiere);
   this.getAllSaiItems();
 }

Save(){
  //var xx:string;
  //this.SaiItemEnCours.CodeItem = this.SaiItemEnCours.CodeMatiere+"4"+this.formattage(this.getRandomInt(1,99));
  this.SaiItemEnCours.CodeItem = this.SaiItemEnCours.CodeMatiere+this.CodeNiveau+this.formattage(this.getRandomInt(1,999));
  console.log("@@@ Verif",this.SaiItemEnCours);
  this._itemsService.InsertItem(this.SaiItemEnCours)
         .subscribe(
            (d) => {
            
             this.getAllSaiItems();
             console.log("Saisie reussie", d);
            }
           );
  
}
nbItemsParPage:number =5;
position:number=0;
precedentItem(){
  this.position--;
   this.lesSaiItems=  this.copielesSaiItems.slice(this.position*this.nbItemsParPage,(this.position*this.nbItemsParPage)+this.nbItemsParPage);
}
prochainItem(){
  this.position++;
   this.lesSaiItems=  this.copielesSaiItems.slice(this.position*this.nbItemsParPage,(this.position*this.nbItemsParPage)+this.nbItemsParPage);
}
getAllSaiItems(){
  this._itemsService.getAllItems()
     .subscribe(
       items =>{
         this.lesSaiItemsTempon= <SaiItem[]> items;
         //this.lesSaiItems = 
        
         this.copielesSaiItems = <SaiItem[]> this.lesSaiItemsTempon.filter((item_)=>{
           return  (item_.CodeMatiere==this.SaiItemEnCours.CodeMatiere) && (parseInt(item_.CodeItem.substr(2,1))==this.CodeNiveau);
         });
         this.affichePossibleReponse = false;
         this.position =0;
         this.initItemCourant();
         this.lesPossibleReponses=[];
         this.lesSaiItems=  this.copielesSaiItems.slice(this.position*this.nbItemsParPage,(this.position*this.nbItemsParPage)+this.nbItemsParPage);
         this.SaiItemEnCours.Ordre = this.lesSaiItems.length+1;
         this.nbItem = this.lesSaiItems.length;
         
        
         },// document.getElementById("nomdom").focus();},
       error => this.errorMessage = <any> error);
}

  getDomaineContenu(){
       this._domaineContenuService.getAllDomaine()
     .subscribe(
       domaines =>{ this.lesDomainesContenus = <DomaineContenu[]> domaines; },// document.getElementById("nomdom").focus();},
       error => this.errorMessage = <any> error);
  }

  getDomaineCognitif(){
     this._domaineCognitifService.getAllDomaine()
     .subscribe(
       domaines =>{ this.lesDomainesCognitifs = <DomaineCognitif[]> domaines; },// document.getElementById("nomdom").focus();},
       error => this.errorMessage = <any> error);
   }

  

   getMatieres(){
     this._matiereService.getAllMatieres()
     .subscribe(
       domaines =>{ this.lesMatieres = <Matiere[]> domaines; },// document.getElementById("nomdom").focus();},
       error => this.errorMessage = <any> error);
   }
   getRandom(min, max) {
    return Math.random() * (max - min) + min;
   }
   getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
   formattage(n){
      return n.toString().padStart(3,"0");
    //return n > 9 ? "" + n: "0" + n;
   }

   DisBonjour(){
     alert("Bonjour");
   }

   VoirPossibleReponse(_item){
     this.itemCourantTempon =<SaiItem> _item;
     this.affichePossibleReponse=true;
     console.log("######### Voir Possible reponse ############");
    // this.PossibleReponsebEnCours.CodeItem = "kbeliz";//this.itemCourantTempon.CodeItem"";
     console.log(this.itemCourantTempon.CodeItem);
     console.log(_item.CodeItem,_item.Ordre,_item,this.itemCourantTempon);
     //this.PossibleReponsebEnCours.CodeItem = this.itemCourantTempon.CodeItem;
     this._possibleReponsebService.getPossibleReponseByItem(_item)
     .subscribe(
       p =>{
          this.lesPossibleReponses = <PossibleReponseb[]>p; 
          this.konbyen = this.lesPossibleReponses.length;
          console.log('Possible reponse',this.lesPossibleReponses);
          console.log('Quantite :',this.konbyen);
        },// document.getElementById("nomdom").focus();},
       error => this.errorMessage = <any> error);
   }

   Save2(p,q,vr){
     var estVraireponseb:number= vr=="on"? 1:0;
     var pr:PossibleReponseb={
       CodeItem:this.itemCourantTempon.CodeItem,
       LettrePossibleReponse:q,
       CodePossibleReponse:this.itemCourantTempon.CodeItem+q,
       Text1:p,
       ordreQuestion:this.itemCourantTempon.Ordre,
       estVraiReponse: estVraireponseb
     };
    
    this._possibleReponsebService.InsertPossibleReponse(pr)
         .subscribe(
            (d) => {
             // this.Domaine_actuel = {codeDom:0,nomDom:''};
             // this.getDomaines();
             this.VoirPossibleReponse(this.itemCourantTempon);
            // this.getAllSaiItems();
               console.log("Saisie reussie", d);
            }
           );
     console.log(this.itemCourantTempon);
     console.log(pr);
   }

   getPossibleReponse(p){

   }

  
   
}
