import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interface';

//like an abstract class 

@Injectable()
export class DbzService{
    private _characters : Character[] = [
        {
            name: "Majin Boo",
            powerPoints:15000
        },
        {
            name: "Frezer",
            powerPoints:10000
        },
    
    ];
      
    get characters():Character[]{
        return [...this._characters];
    }
    constructor(){}
    
    addCharacter(c:Character){
        this._characters.push(c);
    }


    
}