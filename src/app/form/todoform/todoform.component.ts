import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent  {
form :FormGroup;

  constructor(fb :FormBuilder) {
    this.form=fb.group({
      name:['', Validators.required],
      email:[''],
    });
   }


}
