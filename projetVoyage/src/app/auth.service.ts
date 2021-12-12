import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
admin:boolean;
  username:string="admin";
  password:string="admin";
  constructor(private router:Router) { }

  isLoggedIn(user:string,pass:string) {
   if ((this.username==user)&&(this.password==pass))
   {
    this.router.navigate(['/ajout']);
    localStorage.setItem('loggedUser',this.username);
    this.admin=true;
   
    return true;
   }
   else { this.admin=true;
     return false;}

 
}
loggedOut(){
  this.router.navigate(['/login']);
  localStorage.removeItem('loggedUser');
  return false ;
}
Admin(){
return this.admin;}
}