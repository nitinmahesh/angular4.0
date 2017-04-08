import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  childNameArray = ['foo','koo','','hoo','moo','too'];
  childNameArray1 = ['foo1','koo1','1','hoo1','moo1','too1'];
}
