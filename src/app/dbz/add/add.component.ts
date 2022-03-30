import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  //Parent-Child communication 
  @Input() new:Character  = {
    name: "",
    powerPoints: 0
  };

  //@Output() onNewCharacter:EventEmitter<Character> = new EventEmitter(); //Child-Parent communication 
  
  constructor(private dbzService:DbzService){}

  add(){
    if (this.new.name.trim().length === 0 )
    {
      return;
    }
    console.log(this.new);
    //this.onNewCharacter.emit(this.new);
    this.dbzService.addCharacter(this.new);
    this.new = {
      name:"",
      powerPoints:0
    }
  }
  
}
