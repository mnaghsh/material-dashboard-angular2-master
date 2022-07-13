import { LoginService } from './../service/login/login.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonService } from 'app/service/common.service';
import { ConfigService } from 'app/service/config.service';
import { AuthenticationService } from 'app/service/authentication/authentication.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  myControl = new FormControl();
  @ViewChild('username') username;
  @ViewChild('password') password;
  message: string;
  find = false;
  connectToServer: any;


  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private auth: AuthenticationService,
    private configService: ConfigService,
    public commonService: CommonService,
    private myRoute: Router
  ) {

    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.connectToServer = true
    this.loginService;


  }

  public login() {
    //this.myRoute.navigate(['dashboard']);
    if (this.loginForm.valid) {
      let body = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      }
      this.commonService.loading = true;
      this.configService.post("smaritAuth/loginByPassword", body).subscribe(
        (data: any) => {
          console.log(data)
          debugger;
          if (data == null) {

            this.commonService.showEventMessage("نام کاربری یا کلمه عبور اشتباه است.")

            this.commonService.loading = false;
            return;
          }
          debugger
          this.commonService.loading = false;
          this.commonService.activeUser = (data)
          if (data.token) {
            this.auth.wasLoggedIn();
            this.auth.token = data.token
            this.myRoute.navigate(['dashboard']);
            console.log('this.auth.token', this.auth.token)
          }
        },
        (error) => {
          this.commonService.showEventMessage("خطایی به وجود آمده یا ارتباط با سرور قطع می باشد")

        }
      )
    }
  }




  public keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.login();
    }
  }




}
