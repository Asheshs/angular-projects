import { Component } from '@angular/core';

@Component({
  selector: 'app-root',// name of the selector
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 message="Hello from angular!!!"
someobj={
  "name":"rajesh kutrapali",
  "place":"india"
};
profession={
  "worksat":"i am a programmer"
};
  getSomething():void{

  }
}
