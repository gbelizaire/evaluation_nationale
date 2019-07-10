import { Component, OnInit } from '@angular/core';
import { TypeDeQuestion } from '../../shared/model/type-de-question.enum';

import { PossibleReponse } from '../../shared/model/possible-reponse';
import  {Item } from '../../shared/model/item';
import { SaiItem } from '../../shared/model/sai-item';

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

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  currentItem:SaiListItem= {
       CodeItem:'',
       CodeMatiere:'',
       Ordre:0,
       CodeDomCogn:'',
       CodeDomCont:'',
       Question:'',
       Qcm:1,
       reponse:"",
       possiblereponses:[]
       
    };
    lesMatieres :Matiere[];
    CodeMatiere_Temp :string="";
    CodeEleve:Eleve;
    infoEleve :InfoEleve;

    initCurrentItem(){
       this.currentItem= {
       CodeItem:'',
       CodeMatiere:'',
       Ordre:this.nbItem++,
       CodeDomCogn:'',
       CodeDomCont:'',
       Question:'',
       Qcm:1,
       reponse:"",
       possiblereponses:[]
       
    };
    }
//currentItem:SaiListItem;
errorMessage:string;
title:string="List des Items";
  items:SaiItem[];//Item[] =[];
  itemsTempon:SaiItem[];
  nbItem:number=0;
  currentItemNumber:number =1;
  constructor(private _reponseService:ReponseService,private itemsService:ItemsService,private _matiereService:MatiereService,private _eleveServiceService:EleveServiceService) { }
  obj_ :SaiItem = null;
  ngOnInit() {
    
   // this.currentItemNumber =1;
    this.getMatieres();
    //this.getAllItems();
    
     this.currentItemNumber =1;
     
  }
   prochainItem(){
      if(this.currentItemNumber <= this.nbItem-1){
        ++this.currentItemNumber;
      //  Object.assign(this.currentItem,this.items[this.currentItemNumber -1]);
        //this.currentItem = this.items[this.currentItemNumber -1];
        Object.assign(this.currentItem,this.items[this.currentItemNumber -1]);
         this.currentItem.possiblereponses = this.currentItem.possiblereponses.filter(ps=>{return !ps.CodePossibleReponse.endsWith('Z');});
       // console.log("Prochain =",this.currentItemNumber);
        //console.log("Current",this.currentItem);  
      }
    }


    filterIt(){
      this.initCurrentItem();
       this.getAllItems(this.CodeEleve.Code_el_eva,this.CodeMatiere_Temp,this.CodeNiveau_Temp);
    }

     getMatieres(){
     this._matiereService.getAllMatieres()
     .subscribe(
       domaines =>{ this.lesMatieres = <Matiere[]> domaines; },// document.getElementById("nomdom").focus();},
       error => this.errorMessage = <any> error);
   }

   CodeNiveau_Temp:String;
   getInfo(Code_el_eva,Code_Matiere,Code_Niveau){
     this.CodeMatiere_Temp = Code_Matiere;
     this.CodeNiveau_Temp = Code_Niveau;
     console.log("$$$$$$$$$$$$$$$",this.CodeNiveau_Temp,"$$$$$$$$$");
     //console.log(Code_el_eva);
     this.CodeEleve={'Code_el_eva':Code_el_eva};
     // = {'Code_el_eva':Code_el_eva};
     this._eleveServiceService.getInfoEleve(this.CodeEleve)
     .subscribe(
       info_Eleve =>{ 
         this.infoEleve = <InfoEleve>info_Eleve;
         console.log("On recoit des infos");
         this.currentItemNumber=1;
         this.getAllItems(this.CodeEleve.Code_el_eva,this.CodeMatiere_Temp,this.CodeNiveau_Temp);
         console.log(this.infoEleve );
         console.log("----------" );
         console.log(info_Eleve );
       
         
        },// document.getElementById("nomdom").focus();},
       error => this.errorMessage = <any> error);
   }
   pointerlaquestion(noquestion){
    if(noquestion>1 && noquestion <=this.nbItem){
      this.currentItemNumber=noquestion;
      Object.assign(this.currentItem,this.items[this.currentItemNumber -1]);
       this.currentItem.possiblereponses = this.currentItem.possiblereponses.filter(ps=>{return !ps.CodePossibleReponse.endsWith('Z');});
      //console.log("Precedent =",this.currentItemNumber);
      //console.log("Current",this.currentItem);  
      //this.currentItem = this.items[this.currentItemNumber -1];
    }
   }
    precedentItem(){
      if(this.currentItemNumber >1){
        this.currentItemNumber--;
        Object.assign(this.currentItem,this.items[this.currentItemNumber -1]);
         this.currentItem.possiblereponses = this.currentItem.possiblereponses.filter(ps=>{return !ps.CodePossibleReponse.endsWith('Z');});
        //console.log("Precedent =",this.currentItemNumber);
        //console.log("Current",this.currentItem);  
        //this.currentItem = this.items[this.currentItemNumber -1];
      }
    }

  
  getAllItems(CodeEleve,CodeMatiere,CodeNiveau){

     this.itemsService.getAllSaiItemsb(CodeEleve,CodeMatiere,CodeNiveau)
     .subscribe(
       p =>{
         this.items = p;
        //  this.itemsTempon = p;
        //   this.items = <SaiItem[]> this.itemsTempon.filter((item_)=>{
        //    return  item_.CodeMatiere==this.CodeMatiere_Temp;
        //  });
        
      this.nbItem = this.items.length;
     // if(this.nbItem>=1){this.currentItemNumber =1;}
     // this.initCurrentItem();
      if(this.nbItem >0){
        this.obj_ = <SaiListItem>this.items[this.currentItemNumber -1];//[this.currentItemNumber -1];
       
       Object.assign(this.currentItem,this.obj_);
       this.currentItem.possiblereponses = this.currentItem.possiblereponses.filter(ps=>{return !ps.CodePossibleReponse.endsWith('Z');});
        //console.log(this.currentItem);
      }else{
          this.items =[];
          this.initCurrentItem();
        }  
    },// document.getElementById("nomdom").focus();},
        error => this.errorMessage = <any> error);
   }

// function permettant de prendre en compte le choix d'une possible reponse
prendreEncompteChoix(val, currentItemNumber){
  //this.obj_ = 
  (<SaiListItem>this.items[this.currentItemNumber -1]).reponse = val;//[this.currentItemNumber -1];
  
  //Object.assign(this.currentItem,this.obj_); 
  //this.currentItem.reponse
}

info:any={"CodeEleve":"",CodeItem:"","valeur":"","OrdreItem":"","libiea":""};
n:number;

   Affiche(val,CodeItem_,OrdreItem_){
   this.info ={"CodeEleve":this.CodeEleve.Code_el_eva,CodeItem:CodeItem_,"valeur":val,"OrdreItem":OrdreItem_};
   this._reponseService.UpdateReponse(this.info).subscribe(p=>{
     this.n = this.currentItemNumber;
     //console.log("position courante",this.currentItemNumber);
    // console
    //ligne 178 commentee pour raison de performance et remplacee par la ligne 179  
    //this.getAllItems(this.CodeEleve.Code_el_eva,this.CodeMatiere_Temp);
    this.prendreEncompteChoix(val,this.currentItemNumber);
       //console.log("position Nouvelle",this.currentItemNumber);
      // this.currentItemNumber =  this.n;
       this.prochainItem();
   },error => this.errorMessage = <any> error);
   
    // let d = new Date().toISOString().slice(0,10).replace(/-/g,"");
     //alert(`La reponse de l\'eleve pour la question ${CodeItem_} est ${val} à ${d}`);
     
   }

   Save(){}
   
}
