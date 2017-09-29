import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { MainComponent }  from './main/main.component';
import { AboutComponent }  from './about/about.component';


import { MovieComponent }  from './main/movie/movie.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, MainComponent, MovieComponent,AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
