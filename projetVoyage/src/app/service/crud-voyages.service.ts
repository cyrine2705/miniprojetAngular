import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat';
import { Observable, observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

import { VoyageEtranger } from '../voyage-etranger';

@Injectable({
  providedIn: 'root'
})
export class CrudVoyagesService {
  lesVoyages:Observable<VoyageEtranger[]>;
  
  id:number;
  r:string;
  itemCollection:AngularFirestoreCollection;


  constructor(public fireservice:AngularFirestore) { 
    this.lesVoyages=this.fireservice.collection('VoyagesEtranger').valueChanges();
  }
  public getVoyage(){
    return this.lesVoyages;
  }
  public addNewVoyage(v ) {
  
     return this.fireservice.collection('VoyagesEtranger').add(v);
      
  } 
  public updateNewVoyage(id,v ) {
 // lezem el id tjibha men lpage lo5ra besh t'updati 3leha
     return this.fireservice.collection('VoyagesEtranger').doc(`${id}`).set(v);
      
  } 
  public deleteVoyage(name ) {
   // lezem el id tjibha men lpage lo5ra besh t'deleteha
   console.log(name);
    return this.fireservice.collection('VoyagesEtranger').doc(name).delete();
    
  }
  voyages: VoyageEtranger[] = [];
  voayage= new Subject<VoyageEtranger[]>();

  emitBooks() {
    this.voayage.next(this.voyages);
  }
}



