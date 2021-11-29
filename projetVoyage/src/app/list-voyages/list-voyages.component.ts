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
voyages:VoyageEtranger[];
  constructor(  db: AngularFirestore, private serviceVoyage:CrudVoyagesService, private router: Router) {
    };

  ngOnInit(): void {
    this.serviceVoyage.getVoyage().subscribe(voyages=>{this.voyages=voyages});
    console.log(this.voyages);
  }
  delete(name){
    console.log ("hi") ;
      this.serviceVoyage.deleteVoyage(name);
    this.router.navigate(['/liste']);
    
  }

}
