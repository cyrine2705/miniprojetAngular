import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CrudVoyagesService } from '../service/crud-voyages.service';
import { VoyageEtranger } from '../voyage-etranger';

@Component({
  selector: 'app-list-voyages',
  templateUrl: './list-voyages.component.html',
  styleUrls: ['./list-voyages.component.css']
})
export class ListVoyagesComponent implements OnInit {
voyages:  any[];

  constructor(  db: AngularFirestore, private serviceVoyage:CrudVoyagesService, private router: Router,private userService:AuthService) {
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
  Oncherche(rech:string){
    if(rech=="")
    { return this.ngOnInit();}
    else{
    this.serviceVoyage.rech(rech).subscribe(actioanArray=>{
    return  this.voyages=actioanArray.filter(item => {
        return{
          id : item.payload.doc.id,
          data: item.payload.doc.data(),
          name:item.payload.doc.data()['libelle'],
        }
      })
    });
  }}
  Admin(){
    
    return this.userService.Admin();
  }
  
   
 
}
