import { Component, OnInit,Input } from '@angular/core';
import { InfoEleve } from "../../shared/model/infoEleve";

@Component({
  selector: 'app-info-eleves',
  templateUrl: './info-eleves.component.html',
  styleUrls: ['./info-eleves.component.scss']
})
export class InfoElevesComponent implements OnInit {
   @Input() infoeleve:InfoEleve;
  constructor() { }

  ngOnInit() {
  }
  getInfoEleve(){
      console.log(" Me voici ",this.infoeleve.ADRESSE,this.infoeleve.Nom, this.infoeleve.Prenom);
  }
}



