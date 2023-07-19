import { Component, OnInit } from "@angular/core";

import { SangilTab } from "./shared/sangilTab.model";

@Component({
  selector: "sangilTab",
  templateUrl: "sangilTab.component.html",
})
export class SangilTabComponent implements OnInit {
  sangilTab: SangilTab[] = [];

  constructor() {}

  ngOnInit() {}
}
