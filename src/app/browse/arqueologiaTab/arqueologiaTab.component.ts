import { Component, OnInit } from "@angular/core";

import { ArqueologiaTab } from "./shared/arqueologiaTab.model";

@Component({
  selector: "arqueologiaTab",
  templateUrl: "arqueologiaTab.component.html",
})
export class ArqueologiaTabComponent implements OnInit {
  arqueologiaTab: ArqueologiaTab[] = [];

  constructor() {}

  ngOnInit() {}
}
