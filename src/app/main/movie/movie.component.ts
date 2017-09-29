
import { Component, Input } from '@angular/core';
import { Movie } from '../../model/app.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie.component.html',
})
export class MovieComponent  { 
	
	@Input()movie:Movie;
	
}