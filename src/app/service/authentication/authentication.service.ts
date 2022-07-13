import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn:boolean
  token = "";
  constructor() {
  }
  public wasLoggedIn(){
    this.isLoggedIn=true

  }
  public wasLoggedOut(){
    this.isLoggedIn=false
    this.token = "";
  }
  public loginStatus(){
    return this.isLoggedIn;
  }
}
