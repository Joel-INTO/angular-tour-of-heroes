import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"]
})
export class SelectComponent implements OnInit {
  popoverHidden = true;

  constructor() {}

  popoverToggle(): void {
    alert("hello");
  }

  ngOnInit() {}
}
