import { Component } from "@angular/core";


@Component({
    selector: 'app-counter', //component´s name
    template: `
                <h1>{{title}}</h1>
                <h3>Base:{{base}}</h3>
                <button (click)="add(base)">+{{base}}</button>
                <span>{{number}}</span>
                <button (click)="add(-base)">-{{base}}</button>
              `
    
    //styleUrls: ['./app.component.css']
  })
  
export class CounterComponent{
    title : string = 'Counter app';
    number: number = 0;
    base  : number = 5;
  
    add(value:number){
      this.number += value;
    }
    subtract(){
      this.number ++;
    }
}