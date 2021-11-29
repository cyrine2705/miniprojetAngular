import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { VoyageEtranger } from '../voyage-etranger';

@Component({
  selector: 'app-list-voyages',
  templateUrl: './list-voyages.component.html',
  styleUrls: ['./list-voyages.component.css']
})
export class ListVoyagesComponent implements OnInit {
voyages;
  constructor(  db: AngularFirestore) {
    // const Collection: AngularFirestoreCollection<VoyageEtranger> = this.db.collection('/VoyageEtranger');
    // const Collection: AngularFirestoreCollection<VoyageEtranger>;
    // return Collection.snapshotChanges().map(actions => {
      // return actions.map(a => {
        // const data = a.payload.doc.data();
        // return data;

    };

  ngOnInit(): void {
  }

}
