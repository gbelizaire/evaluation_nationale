import { Component, OnInit } from '@angular/core';
import { EleveServiceService } from "../../shared/services/eleve-service.service";

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.scss']
})
export class SuiviComponent implements OnInit {
  CodeNiveau:string;
  constructor(private _eleveServiceService:EleveServiceService) {

   }
  listeEleves:any[];
  ngOnInit() {  
   }
    //el:Array<any>=[];
   getInfo(CodeNiveau,CodeEcole,num_Salle){
     var el:Array<any>[]=[];
     console.log(CodeNiveau,CodeEcole);
     this._eleveServiceService.getEleveParEcole(CodeEcole,CodeNiveau,num_Salle).subscribe(p=>{
         this.listeEleves =p;
         console.log(this.listeEleves);
     });
   }

   ChangeMe(Code_eleve,CodeMatiere,val){
     console.log(Code_eleve,CodeMatiere,val);
      this._eleveServiceService.updateSuivi_eleve(Code_eleve,CodeMatiere,val).subscribe(p=>{
         //this.listeEleves =p;
         //console.log(this.listeEleves);
     });
   }
}
