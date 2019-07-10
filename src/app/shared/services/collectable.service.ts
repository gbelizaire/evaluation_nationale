import { Injectable } from '@angular/core';
import { Collectable } from './collectable.model'

@Injectable()
export class CollectableService{
    private collectables: Collectable[] = [
        {description:' A Very first copy of "Jquery for the Dummies"',type:'Book'},
        {description:' The first letter ever written',type:'Piece of Paper'},
        {description:' A Photograph showing noting',type:'Photo'},
        {description:' A box with all sold Zunes',type:'Garbage'}
    ];

 private collection :Collectable[]=[];

  getCollectables():Collectable[]{
      return this.collectables;
  }

  getCollection():Collectable[]{
      return this.collection;
  }

  addToCollection(item :Collectable){
   if(this.collection.indexOf(item) !== -1){
       return;
   }
   this.collection.push(item);
  }

  removeFromCollection(item:Collectable){
      this.collection.splice(this.collection.indexOf(item),1);
  }

}