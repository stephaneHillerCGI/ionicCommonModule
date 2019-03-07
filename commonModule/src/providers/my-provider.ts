import { Injectable } from "@angular/core";

@Injectable()
export class MyProvider {
  myMethod() {
    console.log("My Provider !!");
  }
}
