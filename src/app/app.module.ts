import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormComponent } from './form/form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent
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
