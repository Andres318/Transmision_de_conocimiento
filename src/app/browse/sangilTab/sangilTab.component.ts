import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Menu } from "nativescript-menu";
import { Page } from "tns-core-modules";

@Component({
  selector: "sangilTab",
  templateUrl: "sangilTab.component.html",
  styleUrls: ["./sangilTab.component.css"],
})
export class SangilTabComponent{
  
  constructor(public page: Page, public router: Router) {}

  ButtonClick1() {
    Menu.popup({
      view: this.page.getViewById("addButton1"),
      actions: [{ id: "11", title: "Camila Gualdron" }],
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
      actions: [{ id: "12", title: "Andres Rojas" }],
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
      actions: [{ id: "6", title: "Natalia Ruiz" }],
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
      actions: [{ id: "1", title: "Miguel Quintero" }],
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
