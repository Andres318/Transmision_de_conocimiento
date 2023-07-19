import { Component, OnInit } from '@angular/core'
import { Observable, Page } from '@nativescript/core';
import { DataService, DataItem } from '../shared/data.service'
import { Menu } from "nativescript-menu";

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends Observable implements OnInit  {
  items: Array<DataItem>
  constructor(private _itemService: DataService, public page: Page) {
    super();
   }

  ngOnInit(): void {
    this.items = this._itemService.getItems()
  }

  handleButtonClick() {
    console.log('raddius button tabed');
    Menu.popup({
      view: this.page.getViewById("addButton"),
      actions: ["Nueva publicacion", "Programar evento"]
    })
      .then(action => {
         alert(action.id + " - " + action.title);
      })
      .catch(console.log);
  }
  
}
