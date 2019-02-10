import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tour of Heroes";
  selectOutput = "Initial value binding";
  items = "Hello";

  readChange(event) {
    console.log("Reading change: " + event);
    this.selectOutput = '"' + "First element: " + event + '"';
  }
}
