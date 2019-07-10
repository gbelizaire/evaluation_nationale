
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import * as console from 'console';
import { PossibleReponseb } from "app/shared/model/possible-reponseb";
//import { PossibleReponseb } from "./../../shared/model/possible-reponseb";



@Component({
  selector: 'app-champs-select',
  templateUrl: './champs-select.component.html',
  styleUrls: ['./champs-select.component.css']
})
export class ChampsSelectComponent implements OnInit {
  @Input() possibles_reponses: PossibleReponseb[];
  // @Input() possibles_reponses : PossibleReponseb[];
  //@Input() possibles_reponses : PossibleReponseb[];;
  @Input() valeur: string;
  @Output()
  selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  envoyer(choix) {
    //console.log(choix);
    this.selected.emit(choix);
  }
}
