import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authenfication',
  templateUrl: './authenfication.component.html',
  styleUrls: ['./authenfication.component.css']
})
export class AuthenficationComponent implements OnInit {

  constructor( private authService :AuthService) { }


  ngOnInit(): void {
  }
  OnSubmit(user,pass){
    this.authService.isLoggedIn(user,pass);
  }


}
