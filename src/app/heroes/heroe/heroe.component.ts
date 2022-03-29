import { Component } from '@angular/core';
import { getLocaleDayNames } from '@angular/common';
@Component({
    selector: 'app-heroe', //<app-heroe> should be in app.component.html
    templateUrl: '/heroe.component.html'
})
//should be in a module
export class HeroeComponent{
    name: string= "IronMan";
    age: number = 45

    get nameUpperCase():string{
        return this.name.toUpperCase();
    }
    getName():string{
        return `${ this.name} - ${ this.age}`
    }

    changeName():void{
        this.name="Spiderman";
    }
    changeAge():void{
        this.age++;
    }

}