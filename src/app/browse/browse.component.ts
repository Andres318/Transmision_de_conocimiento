import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Page } from "@nativescript/core";
import { Menu } from "nativescript-menu";

@Component({
  selector: "Browse",
  templateUrl: "./browse.component.html",
  styleUrls: ["./browse.component.css"],
})
export class BrowseComponent {
  constructor(public page: Page, private router: Router) {}

  buttonTapMun() {
    Menu.popup({
      view: this.page.getViewById("menuBtn1"),
      actions: [
        { id: "bucaramangaTab", title: "Bucaramanga" },
        { id: "socorroTab", title: "Socorro" },
        { id: "sangilTab", title: "San Gil" },
        { id: "velezTab", title: "Velez" },
      ],
    })
      .then((action) => {
        this.router.navigateByUrl(
          "/(homeTab:home/default//browseTab:browse/default/" +
            action.id +
            "//searchTab:search/default)"
        );
      })
      .catch(console.log);
  }

  buttonTapCat() {
    Menu.popup({
      view: this.page.getViewById("menuBtn2"),
      actions: [
        { id: "artesaniaTab", title: "Artesania" },
        { id: "turismoTab", title: "Turismo" },
        { id: "gastronomiaTab", title: "Gastronomia" },
        { id: "arqueologiaTab", title: "Arqueologia" },
      ],
    })
      .then((action) => {
        this.router.navigateByUrl(
          "/(homeTab:home/default//browseTab:browse/default/" +
            action.id +
            "//searchTab:search/default)"
        );
      })
      .catch(console.log);
  }
}
