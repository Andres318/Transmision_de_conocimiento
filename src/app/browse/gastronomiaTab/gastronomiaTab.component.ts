import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Menu } from "nativescript-menu";
import { Page } from '@nativescript/core';

@Component({
  selector: "gastronomiaTab",
  templateUrl: "gastronomiaTab.component.html",
  styleUrls: ["./gastronomiaTab.component.css"],
})
export class GastronomiaTabComponent{
  
  constructor(public page: Page, public router: Router) {}

  ButtonClick1() {
    Menu.popup({
      view: this.page.getViewById("addButton1"),
      actions: [{ id: "3", title: "David Vasquez" }],
    })
      .then((action) => {
        this.router.navigateByUrl(
          "/(homeTab:home/default//browseTab:browse/item/" +
            action.id +
            "//searchTab:search/default)"
        );
      })
      .catch(console.log);
  }
  ButtonClick2() {
    Menu.popup({
      view: this.page.getViewById("addButton2"),
      actions: [{ id: "9", title: "Ministerio de Cultura" }],
    })
      .then((action) => {
        this.router.navigateByUrl(
          "/(homeTab:home/default//browseTab:browse/item/" +
            action.id +
            "//searchTab:search/default)"
        );
      })
      .catch(console.log);
  }
  ButtonClick3() {
    Menu.popup({
      view: this.page.getViewById("addButton3"),
      actions: [{ id: "10", title: "Camilo Sanchez" }],
    })
      .then((action) => {
        this.router.navigateByUrl(
          "/(homeTab:home/default//browseTab:browse/item/" +
            action.id +
            "//searchTab:search/default)"
        );
      })
      .catch(console.log);
  }
}
