import { Component, OnInit } from "@angular/core";

import { ArtesaniaTab } from "./shared/artesaniaTab.model";

@Component({
  selector: "artesaniaTab",
  templateUrl: "artesaniaTab.component.html",
})
export class ArtesaniaTabComponent implements OnInit {
  artesaniaTab: ArtesaniaTab[] = [];

  constructor() {}

  ngOnInit() {}
}
