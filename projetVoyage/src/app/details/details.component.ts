import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { CrudVoyagesService } from '../service/crud-voyages.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  identifiant:number;
  voyages: any[];
  constructor(db: AngularFirestore,private activatedRoute:ActivatedRoute,private serviceVoyage:CrudVoyagesService) { }

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
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
  

}
