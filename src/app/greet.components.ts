import {Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'greet',
    template: `
    <style>
    h1 {
      color: purple;
    }
    </style>
    <h1>{{_greetMessage}}</h1>
    <button (click)=handleclick()">Click me</button>`,
    styles: ['h1 { font-weight: normal; }']
})
export class GreetComponent{
    //message :string = "Hello World";
    _greetMessage : string;

@Output() eventClick = new EventEmitter();
handleclick(){
    console.log("I am clicked.");
    this.eventClick.emit("Hi I am clicked from parent.");
}

}