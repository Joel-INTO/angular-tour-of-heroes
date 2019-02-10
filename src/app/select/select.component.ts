import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"]
})
export class SelectComponent implements OnInit {
  checkedElements = [];

  constructor() {}

  popoverClicked(): void {
    this.togglePopover();
  }

  togglePopover(): void {
    let list = <HTMLElement>(
      document.getElementsByClassName("list-container")[0]
    );
    list.hidden = !list.hidden;
  }

  submitClicked(): void {
    this.checkedElements = [];
    const elements = document.getElementsByClassName("counsellor");
    for (let i = 0; i < elements.length; i++) {
      const currentElement = <HTMLInputElement>elements[i];
      if (currentElement.checked) {
        this.checkedElements.push(currentElement.name);
      }
    }

    console.log(this.checkedElements);
    this.togglePopover();
  }

  ngOnInit() {}
}
