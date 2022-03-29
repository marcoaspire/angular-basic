import { NgModule } from "@angular/core";
import { CounterComponent } from './counter/counter.component';

@NgModule({
    declarations:[
        CounterComponent
    ],
    //this element will be public
    exports:[
        CounterComponent
    ]
})

export class CounterModule{

}