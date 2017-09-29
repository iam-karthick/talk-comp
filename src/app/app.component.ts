import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  { 
	
	feature:string= "home";
	
	onNavigate(tab:string) {
	this.feature = tab;
		console.log(tab);
	}
	
}
