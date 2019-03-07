import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@Component({
  selector: 'my-component',
  templateUrl: '../../src/components/my-component.html'
})
export class MyComponent {

  constructor() {

  }

  ngOnInit() {
    console.log("My Component !!");
  }
}
