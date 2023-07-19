import { Component, OnInit } from "@angular/core";

import { SocorroTab } from "./shared/socorroTab.model";

@Component({
  selector: "socorroTab",
  templateUrl: "socorroTab.component.html",
})
export class SocorroTabComponent implements OnInit {
  socorroTab: SocorroTab[] = [];

  constructor() {}

  ngOnInit() {}
}
