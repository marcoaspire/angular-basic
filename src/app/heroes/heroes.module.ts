//module
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    //
    declarations:[
        HeroeComponent,
        ListComponent
    ],
    //this element will be public
    exports:[
        ListComponent
    ],
    imports:[
        //modules
        //CommonModule //it has *ngFor *ngIf
    ]
})
export class HeroesModule{

}