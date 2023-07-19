import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Page } from '@nativescript/core';
import { Menu } from "nativescript-menu";

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent extends Observable  {
  // constructor() {
  //   // Use the component constructor to inject providers.
  // }

  // ngOnInit(): void {
  //   // Use the "ngOnInit" handler to initialize data for the view.
  // }

  public message: string;
  private menu: Menu;
  router: Router;

  constructor(public page: Page) {
    super();
  }

  buttonTap() {
    console.log('tabed');
    Menu.popup({
      view: this.page.getViewById("menuBtn1"),
      actions: ["Bucaramanga", "Cali", "Medellin", "Bogota"]
    })
      .then(action => {
        // alert(action.id + " - " + action.title);
        this.handleMenuSelection(action.id);
      })
      .catch(console.log);
  }

  handleMenuSelection(index: number) {
    switch (index) {
      case 0:
        console.log('tabedBucaramanga');
        this.router.navigate(["/BuacaramangaTab"]);
        break;
      case 1:
       // this.router.navigate(["/opcion2"]);
        break;
      case 2:
        //this.router.navigate(["/opcion3"]);
        break;
      default:
        break;
    }
  }


  buttonTapOne() {
    Menu.popup({
      view: this.page.getViewById("menuBtn2"),
      actions: [
        { id: "one", title: "Cultura" },
        { id: "two", title: "Turismo", customOption: "Hello" },
        { id: "three", title: "Gastronomia" },
        { id: "four", title: "Arqueologia" }
      ]
    })
      .then(action => {
        alert(JSON.stringify(action));
      })
      .catch(console.log);
  }
  

}
