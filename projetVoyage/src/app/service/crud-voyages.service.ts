import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

import { VoyageEtranger } from '../voyage-etranger';

@Injectable({
  providedIn: 'root'
})
export class CrudVoyagesService {
  lesVoyages:Observable<any[]>;

  id:number;
  r:string;
  itemCollection:AngularFirestoreCollection;


  constructor(public fireservice:AngularFirestore) {

  }
  public getVoyage(){
    return this.fireservice.collection('VoyagesEtranger').snapshotChanges();
  }
  public getVoyageById(id){
    return this.fireservice.collection('VoyagesEtranger').doc(id).valueChanges();
  }
  public addNewVoyage(v ) {
     return this.fireservice.collection('VoyagesEtranger').add(v);
  }
  public updateNewVoyage(id,v ) {
 // lezem el id tjibha men lpage lo5ra besh t'updati 3leha
     return this.fireservice.collection('VoyagesEtranger').doc(`${id}`).set(v);

  }
  public deleteVoyage(item) {
    return this.fireservice.collection('VoyagesEtranger').doc(item.id).delete();
  }
  voyages: VoyageEtranger[] = [];
  voayage= new Subject<VoyageEtranger[]>();

  emitBooks() {
    this.voayage.next(this.voyages);
  }
}



