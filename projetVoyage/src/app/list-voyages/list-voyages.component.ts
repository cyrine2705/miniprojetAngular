import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { CrudVoyagesService } from '../service/crud-voyages.service';
import { VoyageEtranger } from '../voyage-etranger';

@Component({
  selector: 'app-list-voyages',
  templateUrl: './list-voyages.component.html',
  styleUrls: ['./list-voyages.component.css']
})
export class ListVoyagesComponent implements OnInit {
voyages:  any[];
  constructor(  db: AngularFirestore, private serviceVoyage:CrudVoyagesService, private router: Router) {
    };

  ngOnInit(): void {
    this.getVoyage();
  }
  getVoyage(){
    this.serviceVoyage.getVoyage().subscribe(actioanArray=>{
      this.voyages=actioanArray.map(item => {
        return{
          id : item.payload.doc.id,
          data: item.payload.doc.data(),
        }
      })
    });
  }
  delete(item){
    this.serviceVoyage.deleteVoyage(item);
  }
  Oncherche(ch:string){
    this.serviceVoyage.rech(ch).subscribe(actioanArray=>{
      this.voyages=actioanArray.map(item => {
        return{
          id : item.payload.doc.id,
          data: item.payload.doc.data(),
          name:item.payload.doc.data()['libelle'],
        }
      })
    });
  }
 
}
