import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent  {
  heroes: string [] = ['Ironman','Hulk','Goku','Vegeta'];
  heroe:string="";
  deleteHero() {
    this.heroe=  this.heroes.shift() || '';
  }
}
