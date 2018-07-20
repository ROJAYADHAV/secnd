import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserModule,By} from '@angular/platform-browser';
//import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {DebugElement} from '@angular/core';

import { UserComponent } from './user.component';
import {UserserviceService} from '../userservice.service';
//import{UserserviceServiceMock} from '../mocks/userservice.service.mock';
describe('FormComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers:[{
        provide:UserserviceService,useClass:UserServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
