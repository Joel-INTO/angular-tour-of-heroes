import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"]
})
export class SelectComponent implements OnInit {
  checkedElements = [];

  @Input()
  listItems = "Initial value if NOT bound";

  @Output("update")
  change: EventEmitter<string> = new EventEmitter<string>();

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

    console.log(this.checkedElements[0]);
    if (this.checkedElements.length > 0) {
      this.change.emit(this.checkedElements[0]);
    }
    this.togglePopover();
  }

  ngOnInit() {}
}
