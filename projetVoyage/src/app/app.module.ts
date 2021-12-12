import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AjoutVoyageComponent } from './voyages/ajoutVoyage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListVoyagesComponent } from './list-voyages/list-voyages.component';
import { DetailsComponent } from './details/details.component';
import { ModifierVoyageComponent } from './modifier-voyage/modifier-voyage.component';
import { AuthenficationComponent } from './authenfication/authenfication.component';
import { MenuComponent } from './menu/menu.component';

const config={
  apiKey: "AIzaSyCZy-dWHpoCBLSVp76M1f-ESWeYwOb91rM",
    authDomain: "projetangular-7712d.firebaseapp.com",
    projectId: "projetangular-7712d",
    storageBucket: "projetangular-7712d.appspot.com",
    messagingSenderId: "211068315833",
    appId: "1:211068315833:web:d3e6b6d2ff09e4c20a9368",
    measurementId: "G-WZZWQ57QHP"
};
@NgModule({
  declarations: [
    AppComponent,
    AjoutVoyageComponent,
    ListVoyagesComponent,
    DetailsComponent,
    ModifierVoyageComponent,
    AuthenficationComponent,
    MenuComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
