import { Component, OnInit } from '@angular/core';
import * as data from './products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public books:any;
	public subTitle:string = "Mystery and Crime";
	public title:string = "Fiction";

	constructor(){}

	ngOnInit() {
		this.books = data.data; 

		console.log(this.books);
	}

}
