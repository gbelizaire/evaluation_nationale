
import { Component, OnInit,Input } from '@angular/core';
import { InfoEcole } from './../../shared/model/infoEcole';
import { Infecole } from 'app/shared/model/infecole';

@Component({
  selector: 'app-info-ecoles',
  templateUrl: './info-ecoles.component.html',
  styleUrls: ['./info-ecoles.component.scss']
})
export class InfoEcolesComponent implements OnInit {
  // @Input() infoecole:InfoEcole;
  @Input() infoecole:Infecole;
  constructor() { }

  ngOnInit() {
  }
  getInfoEcole(){
      console.log(" Me voici ",this.infoecole.NOM,this.infoecole.ADRESSE);
  }
}



