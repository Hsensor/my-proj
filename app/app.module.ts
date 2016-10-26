import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { HttpModule }	 from '@angular/http';
import { FormsModule }	 from '@angular/forms';


import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent, 
  	HeroDetailComponent,
  	HeroesComponent,
  	DashboardComponent 
  ],
  providers:[
  	HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
