
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

import { VoyageEtranger } from '../voyage-etranger';

@Injectable({
  providedIn: 'root'
})
export class CrudVoyagesService {
  lesVoyages:Observable<any[]>;
  voyages: VoyageEtranger[] = [];
  voayage= new Subject<VoyageEtranger[]>();

  id:number;
  
  itemCollection:AngularFirestoreCollection;


  constructor(public fireservice:AngularFirestore) {

  }
  public getVoyage(){
    return this.fireservice.collection('VoyagesEtranger').snapshotChanges();
  }

  public addNewVoyage(v ) {
     return this.fireservice.collection('VoyagesEtranger').add(v);
  }
  public updateNewVoyage(v,id ) {

     return this.fireservice.collection('VoyagesEtranger').doc(id).set(v);

  }
  public deleteVoyage(item) {
    return this.fireservice.collection('VoyagesEtranger').doc(item.id).delete();
  }
  public rech(rech){
    return this.fireservice.collection('VoyagesEtranger', ref => ref.where('libelle', '==',rech)).snapshotChanges();
  }
  

 public tri (){
  //return this.fireservice.collection("VoyagesEtranger").orderBy("prix", "asc");
   
      }
    
  
 
}

