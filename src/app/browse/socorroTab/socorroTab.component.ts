import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "@nativescript/core";
import { Menu } from "nativescript-menu";
import { Page } from "tns-core-modules";

@Component({
  selector: "socorroTab",
  templateUrl: "socorroTab.component.html",
  styleUrls: ["./socorroTab.component.css"],
})
export class SocorroTabComponent extends Observable {
  constructor(public page: Page, public router: Router) {
    super();
  }

  ButtonClick1() {
    Menu.popup({
      view: this.page.getViewById("addButton1"),
      actions: [{ id: "4", title: "Angie Sanabria" }],
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
      actions: [{ id: "9", title: "Ministerio de Cultura" }],
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
  ButtonClick4() {
    Menu.popup({
      view: this.page.getViewById("addButton4"),
      actions: [{ id: "5", title: "Arturo Andrade" }],
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
