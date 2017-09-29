import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent  { 
	
@Output() onMenuSelect = new EventEmitter<string>();

	constructor() {
		
	}

	onMenuClick(menuitem:string) {
		this.onMenuSelect.emit(menuitem);
		console.log("Movies clicked!!!");
	}

}