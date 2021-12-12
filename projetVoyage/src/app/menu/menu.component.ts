import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  constructor(private userService:AuthService ,private router:Router) { }

  ngOnInit(): void {
    
    
    
  }
  Admin(){
    
    return this.userService.Admin();
  }
   

  OnLog(){
    this.router.navigate(['/login']);
  }

  


}
