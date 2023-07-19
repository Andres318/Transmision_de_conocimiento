import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "@nativescript/core";
import { Menu } from "nativescript-menu";

@Component({
  selector: "Search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  constructor(public page: Page, private router: Router) {}

  buttonPub() {
    this.router.navigateByUrl(
      "/(homeTab:home/default//browseTab:browse/default//searchTab:search/default/publicacionesTab)"
    );
  }
}
