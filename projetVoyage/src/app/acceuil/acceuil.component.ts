import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { CrudVoyagesService } from '../service/crud-voyages.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  voyages:  any[];
  constructor(db: AngularFirestore, private serviceVoyage:CrudVoyagesService, private router: Router) { }

  ngOnInit(): void {
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
