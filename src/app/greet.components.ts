import {Component, Input} from '@angular/core';

@Component({
    selector:'greet',
    template: `
    <h1>{{_greetMessage}}</h1>`
})
export class GreetComponent{
    //message :string = "Hello World";
    _greetMessage : string;

    @Input()
        set greetMessage(message : string){
            this._greetMessage = message + " I am intercepted.";
        }
        get greetMessage(){
            return this._greetMessage;
        }
}