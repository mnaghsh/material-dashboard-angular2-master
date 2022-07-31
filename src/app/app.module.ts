import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmComponent } from './components/confirm/confirm.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({

  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatSliderModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    ConfirmComponent

  ],
  entryComponents: [
    ConfirmComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
