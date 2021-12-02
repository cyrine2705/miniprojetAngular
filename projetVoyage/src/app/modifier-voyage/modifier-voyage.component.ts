import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudVoyagesService } from '../service/crud-voyages.service';
import { VoyageEtranger } from '../voyage-etranger';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-modifier-voyage',
  templateUrl: './modifier-voyage.component.html',
  styleUrls: ['./modifier-voyage.component.css']
})
export class ModifierVoyageComponent implements OnInit {
  identifiant:number;
  voyages: any[];
  VoyForm: FormGroup;
  Record:VoyageEtranger;
  constructor( private fb:FormBuilder, db: AngularFirestore,private activatedRoute:ActivatedRoute,private serviceVoyage:CrudVoyagesService) { }

  ngOnInit(): void {
    this.VoyForm = this.fb.group({
      libelle:"",
      prix:"",
      description: "",
      dateAllee:'yyyy-MM-dd',
      nbJours:0,
     image:"",
     promotion:false
  })
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
  onSubmitForm(){
    this.VoyForm.getRawValue();
    this.Record=this.VoyForm.value;
    this.serviceVoyage.updateNewVoyage(this.Record,this.identifiant);}
}
