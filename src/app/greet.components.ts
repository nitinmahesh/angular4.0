import {Component} from '@angular/core';

@Component({
    selector:'greet',
    template: `
    <h1>{{message}}</h1>
    <input type="text" [(ngModel)]="nextmessage"/>
    <button (click)="foo()">Hi </button>`
})
export class GreetComponent{
    message :string = "Hello World";
    nextmessage:string;
    foo(){
        this.message = this.message + this.nextmessage;
    }
}
