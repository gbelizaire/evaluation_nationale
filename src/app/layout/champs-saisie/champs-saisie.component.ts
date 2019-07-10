import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-champs-saisie',
  templateUrl: './champs-saisie.component.html',
  styleUrls: ['./champs-saisie.component.css']
})
export class ChampsSaisieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() valeur: string;
  @Output()
  givenValue = new EventEmitter();

  envoyer(choix) {
   // console.log(choix);
    this.givenValue.emit(choix);
  }

}
