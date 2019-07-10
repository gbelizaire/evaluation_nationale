import { PossibleReponseb } from './possible-reponseb'
export interface SaiListItem {
       CodeItem:string;
       CodeMatiere:string;
       Ordre:number;
       CodeDomCogn:string;
       CodeDomCont:string;
       Question:string;
       Qcm:number;
       reponse:string;
       possiblereponses:PossibleReponseb[];
       
       
}
