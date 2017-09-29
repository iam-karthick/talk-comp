
import { Component } from '@angular/core';
import { Movie } from '../model/app.model';

@Component({
  selector: 'my-main',
  templateUrl: './main.component.html',
})
export class MainComponent  { 

/*	data:<array>obj=[{name:"don",description:"bollywood"},
					{name:"jack",description:"hollywood"},
					{name:"vevegam",description:"tamil"},
					{name:"mi6",description:"hollywood"}
					];

*/
	data:Movie[];
	constructor() {
		this.data = [
				new Movie("DON","BOLLYWOOD"),
				new Movie("JACK", "HOLLYWOOD"),
				new Movie("MI6", "HOLLYWOOD")
				];
	}
	
}