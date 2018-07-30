import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
totalvote=0;    

voteChanged =new EventEmitter();
upVote(){
  this.totalvote++;
  this.voteChanged.emit(this.totalvote);
}




}
