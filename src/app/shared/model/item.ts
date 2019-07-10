import { TypeDeQuestion } from './type-de-question.enum';
import { PossibleReponse } from './possible-reponse';
export class Item {
  id:number;
  codeItem:string;
  CodeMatiere:string;
  text:string;
  type_ :TypeDeQuestion;
  posssible_reponses:PossibleReponse[];
  reponse:string;
}
