import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

import { DataService, DataItem } from '../../shared/data.service'

@Component({
  selector: 'ItemDetail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: DataItem

  constructor(
    private _data: DataService,
    private _route: ActivatedRoute,
    private _routerExtensions: RouterExtensions,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this._route.snapshot.params.id
    this.item = this._data.getItem(id)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          console.log("Ruta redirigida:", event.urlAfterRedirects);
      }
  });
  }

  onBackTap(): void {
    this._routerExtensions.back()
  }
}
