import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { VoyageEtranger } from '../voyage-etranger';

@Injectable({
  providedIn: 'root'
})
export class CrudVoyagesService {
  lesVoyages:VoyageEtranger[] = [];
  id:number = 0;
  r:string;
  constructor(public fireservice:AngularFirestore) { }
  public addNewVoyage(v ) {
    v.id=this.id;
    this.id=this.id + 1;
     return this.fireservice.collection('VoyagesEtranger').doc(`${v.id}`).set(v);
      
  } 
  public updateNewVoyage(id,v ) {
 // lezem el id tjibha men lpage lo5ra besh t'updati 3leha
     return this.fireservice.collection('VoyagesEtranger').doc(`${id}`).set(v);
      
  } 
  public deleteVoyage(id ) {
   // lezem el id tjibha men lpage lo5ra besh t'deleteha
    return this.fireservice.collection("VoyagesEtranger").doc(`${id}`).delete()
  }
}
