import { Component, OnInit,Input } from '@angular/core';
import {InfoEleve} from '../../shared/model/infoEleve'

@Component({
  selector: 'app-info-eleve',
  templateUrl: './info-eleve.component.html',
  styleUrls: ['./info-eleve.component.css']
})
export class InfoEleveComponent implements OnInit {
 // @Input() infoeleve:InfoEleve;
  
  
  constructor() { }

  ngOnInit() {
    // //this.info_pp = JSON.parse(InfoEleve);
    // console.log("Test ==>",this.infoeleve);
     
    // //this.info_pp = InfoEleve;
    // this.getInfoEleve();
  }
  // getInfoEleve(){
  //     console.log(" Me voici ",this.infoeleve.ADRESSE,this.infoeleve.Nom, this.infoeleve.Prenom);
  // }

}
