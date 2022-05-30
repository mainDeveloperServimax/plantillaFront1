import { DelieverModule } from './modules/deliever/deliever.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoginModule } from "./modules/Login/login.module";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastComponent } from './shared/UI/toast/toast/toast.component';



@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgMultiSelectDropDownModule.forRoot(),
    LoginModule,
    DelieverModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
