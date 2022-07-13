
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'app/service/authentication/authentication.service';
import { ConfigService } from 'app/service/config.service';
import { CommonService } from 'app/service/common.service';




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
  //  private auth: AuthenticationService,
   // private configService: ConfigService,
   // public commonService: CommonService,
  //  private myRoute: Router
   ) {

    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.connectToServer = true



   }

  // public login() {
  //   this.myRoute.navigate(['menu']);
  //   if (this.loginForm.valid) {
  //     let body = {
  //       userName: this.loginForm.value.username,
  //       password: this.loginForm.value.password,
  //     }
  //     this.commonService.loading = true;
  //     this.configService.post("Users/Login", body).subscribe(
  //       (data: any) => {
  //         if (data == null) {

  //           this.commonService.showEventMessage("نام کاربری یا کلمه عبور اشتباه است.")

  //           this.commonService.loading = false;
  //           return;
  //         }

  //         this.commonService.loading = false;
  //         this.commonService.activeUser = (data)
  //         this.auth.wasLoggedIn();
  //         this.myRoute.navigate(['menu']);

  //       },
  //       (error)=>{
  //         this.commonService.showEventMessage("خطایی به وجود آمده یا ارتباط با سرور قطع می باشد")

  //       }
  //     )
  //   }
  // }




  // public keyDownFunction(event) {
  //   if (event.keyCode === 13) {
  //     this.login();
  //   }
  // }




}
