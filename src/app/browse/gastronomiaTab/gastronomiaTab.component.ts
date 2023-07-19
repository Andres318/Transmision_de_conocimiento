import { Component, OnInit } from "@angular/core";

import { GastronomiaTab } from "./shared/gastronomiaTab.model";

@Component({
  selector: "gastronomiaTab",
  templateUrl: "gastronomiaTab.component.html",
})
export class GastronomiaTabComponent implements OnInit {
  gastronomiaTab: GastronomiaTab[] = [];

  constructor() {}

  ngOnInit() {}
}
