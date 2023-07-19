import { Component, OnInit } from "@angular/core";

import { VelezTab } from "./shared/velezTab.model";

@Component({
  selector: "velezTab",
  templateUrl: "velezTab.component.html",
})
export class VelezTabComponent implements OnInit {
  velezTab: VelezTab[] = [];

  constructor() {}

  ngOnInit() {}
}
