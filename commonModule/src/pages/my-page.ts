import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage() // Comment/Uncomment to switch from live reload/no live reload
@Component({
  selector: 'my-page',
  templateUrl: './my-page.html'
})
export class MyPage {

  constructor() {

  }

  ngOnInit() {
    console.log("My Page !!");
  }
}
