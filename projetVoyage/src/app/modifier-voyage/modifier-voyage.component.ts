import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudVoyagesService } from '../service/crud-voyages.service';
@Component({
  selector: 'app-modifier-voyage',
  templateUrl: './modifier-voyage.component.html',
  styleUrls: ['./modifier-voyage.component.css']
})
export class ModifierVoyageComponent implements OnInit {
  identifiant:number;
  voyages:  any[];

  constructor(private activatedRoute:ActivatedRoute,private serviceVoyage:CrudVoyagesService) { }

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.getVoyageByID()
  }
  getVoyageByID(){
    console.log(this.serviceVoyage.getVoyageById(this.identifiant))
    console.log("xxx")
  }
}
