import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { timeStamp } from 'console';
import { CrudVoyagesService } from '../service/crud-voyages.service';
import { VoyageEtranger } from '../voyage-etranger';
@Component({
  selector: 'app-ajoutVoyage',
  templateUrl: './ajoutVoyage.component.html',
  styleUrls: ['./ajoutVoyage.component.css']
})
export class AjoutVoyageComponent implements OnInit {
  VoyForm: FormGroup;
  Record:VoyageEtranger;
  constructor( private VoyService:CrudVoyagesService, private fb:FormBuilder, db: AngularFirestore) {
    const voyages=db.collection('/VoyagesEtranger').valueChanges();
      voyages.subscribe();
     console.log(Object.keys(voyages).length);}
  onSubmitForm(){
    this.VoyForm.getRawValue();
    console.log(this.VoyForm.value);
    
    this.Record=this.VoyForm.value;
    this.VoyService.addNewVoyage(this.Record);}
  ngOnInit(): void {
    this.VoyForm = this.fb.group({
      libelle:"",
      prix:"",
      description: "",
      dateAllee:'yyyy-MM-dd',
      nbJours:0,
     image:"",
     promotion:false
  })}

}
