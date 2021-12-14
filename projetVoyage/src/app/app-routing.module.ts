import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthGuard } from './auth.guard';
import { AuthenficationComponent } from './authenfication/authenfication.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { ListVoyagesComponent } from './list-voyages/list-voyages.component';
import { ModifierVoyageComponent } from './modifier-voyage/modifier-voyage.component';
import { AjoutVoyageComponent } from './voyages/ajoutVoyage.component';

const routes: Routes = [
  
  {path:"Details",component:DetailsComponent},
  {path:"liste", component:ListVoyagesComponent},
  {path:"login", component:AuthenficationComponent},
  {path:"ajout", component:AjoutVoyageComponent},
  {path:"aboutUs",component:AboutusComponent},
  {path:"modifier/:id", component:ModifierVoyageComponent},
  {path:"Details/:id",component:DetailsComponent},

  
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
