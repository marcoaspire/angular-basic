import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { CounterComponent } from './counter/counter/counter.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListComponent } from './heroes/list/list.component';
import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/counter.module';


//create a new Module CounterModule
//write declarations and exports

@NgModule({
  //components
  declarations: [
    AppComponent
  ],
  //modules
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule
  ],
  //services
  providers: [],
  //main component
  bootstrap: [AppComponent]
})
export class AppModule { }
