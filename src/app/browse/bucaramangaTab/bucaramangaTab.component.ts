import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Menu } from "nativescript-menu";
import { Page } from '@nativescript/core';

@Component({
  selector: "BucaramangaTab",
  templateUrl: "./bucaramangaTab.component.html",
  styleUrls: ["./bucaramangaTab.component.css"],
})
export class BucaramangaTabComponent {
  constructor(public page: Page, public router: Router) {}

  ButtonClick1() {
    Menu.popup({
      view: this.page.getViewById("addButton1"),
      actions: [{ id: "2", title: "Rubi Utima" }],
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
      actions: [{ id: "8", title: "Karen Perez" }],
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
      actions: [{ id: "4", title: "Angie Sanabria" }],
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
  ButtonClick4() {
    Menu.popup({
      view: this.page.getViewById("addButton4"),
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
