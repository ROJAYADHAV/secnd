import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';

describe('EventsComponent', () => {
  let component: EventsComponent;
 

  beforeEach(() => {
   component=new EventsComponent();
    });




  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should raise voteChanged event when upvoted', () => {
    let totalvote=null;
    component.voteChanged.subscribe(tv=>totalvote=tv);
    component.upVote();
    expect(totalvote).not.toBeNull();
  });
});
