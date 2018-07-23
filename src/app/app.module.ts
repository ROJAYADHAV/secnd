import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormComponent } from './form/form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { VoteComponent } from "src/app/arrays and strings/vote.component";
//import {VoteComponent} from './vote.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
