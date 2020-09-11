import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngIf, else & then in Angular';
  condition = true;

  constructor() {
  }

  SetCondition(selectedValue: boolean){
    this.condition = selectedValue;
  }
}
