import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
text ='user page';
users;
  constructor(private http:UserserviceService) {
    this.users=this.http.getUsers();
   }

  ngOnInit() {
  }

}
