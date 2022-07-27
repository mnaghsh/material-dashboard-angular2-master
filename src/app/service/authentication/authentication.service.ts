import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn: boolean;
  token: string;


  constructor() {
    this.token;
  }
  public wasLoggedIn(recievedToken: string) {
    this.token = recievedToken;
    this.isLoggedIn = true

  }
  public wasLoggedOut() {
    this.isLoggedIn = false
    this.token = "";
    //token = "";
  }
  public loginStatus() {
    return this.isLoggedIn;
  }
}
