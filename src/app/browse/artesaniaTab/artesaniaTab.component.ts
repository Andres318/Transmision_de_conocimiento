import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Menu } from "nativescript-menu";
import { Page } from '@nativescript/core';

@Component({
  selector: "artesaniaTab",
  templateUrl: "artesaniaTab.component.html",
  styleUrls: ["./artesaniaTab.component.css"],
})
export class ArtesaniaTabComponent{
  
  constructor(public page: Page, public router: Router) {}

  ButtonClick1() {
    Menu.popup({
      view: this.page.getViewById("addButton1"),
      actions: [{ id: "5", title: "Arturo Andrade" }],
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
      actions: [{ id: "6", title: "Natalia Ruiz" }],
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
      actions: [{ id: "7", title: "Mario Mendoza" }],
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
