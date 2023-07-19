import { Component, OnInit } from "@angular/core";
import { Observable, Page } from "@nativescript/core";
import { DataService, DataItem } from "../shared/data.service";
import { Menu } from "nativescript-menu";
import { Route, Router } from "@angular/router";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent extends Observable implements OnInit {
  items: Array<DataItem>;
  constructor(
    private _itemService: DataService,
    public page: Page,
    public route: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.items = this._itemService.getItems();
  }

  handleButtonClick() {
    console.log("raddius button tabed");
    Menu.popup({
      view: this.page.getViewById("addButton"),
      actions: ["Nueva publicacion"],
    })
      .then((action) => {
        this.route.navigateByUrl(
          "/(homeTab:home/newPub//browseTab:browse/default//searchTab:search/default)"
        );
      })
      .catch(console.log);
  }
}
