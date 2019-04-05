import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn:boolean = true;
  public user:string = "Jane Doe"; 

  constructor() {	
  }

  ngOnInit() {	
  }

  logIn() {
  	this.isLoggedIn = true;  	
  }

  logOut() {
  	this.isLoggedIn = false;
  }

}
