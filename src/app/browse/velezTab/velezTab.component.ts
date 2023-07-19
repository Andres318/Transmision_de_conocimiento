import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Menu } from "nativescript-menu";
import { Page } from "tns-core-modules";

@Component({
  selector: "velezTab",
  templateUrl: "velezTab.component.html",
  styleUrls: ["./velezTab.component.css"],
})
export class VelezTabComponent {
  
  constructor(public page: Page, public router: Router) {}

  ButtonClick1() {
    Menu.popup({
      view: this.page.getViewById("addButton1"),
      actions: [{ id: "bucaramangaTab", title: "Bucaramanga" }],
    })
      .then((action) => {
        this.router.navigateByUrl(
          "/(homeTab:home/item/" +
            action.id +
            "//browseTab:browse/default//searchTab:search/default)"
        );
      })
      .catch(console.log);
  }
  ButtonClick2() {
    Menu.popup({
      view: this.page.getViewById("addButton2"),
      actions: [{ id: "bucaramangaTab", title: "Bucaramanga" }],
    })
      .then((action) => {
        this.router.navigateByUrl(
          "/(homeTab:home/item/" +
            action.id +
            "//browseTab:browse/default//searchTab:search/default)"
        );
      })
      .catch(console.log);
  }
  ButtonClick3() {
    Menu.popup({
      view: this.page.getViewById("addButton3"),
      actions: [{ id: "1", title: "Hola" }],
    })
      .then((action) => {
        this.router.navigateByUrl(
          "/(homeTab:home/item/" +
            action.id +
            "//browseTab:browse/default//searchTab:search/default)"
        );
      })
      .catch(console.log);
  }
  ButtonClick4() {
    Menu.popup({
      view: this.page.getViewById("addButton4"),
      actions: [{ id: "bucaramangaTab", title: "Bucaramanga" }],
    })
      .then((action) => {
        this.router.navigateByUrl(
          "/(homeTab:home/item/" +
            action.id +
            "//browseTab:browse/default//searchTab:search/default)"
        );
      })
      .catch(console.log);
  }
}
