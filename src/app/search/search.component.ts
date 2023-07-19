import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: "Search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _routerExtensions: RouterExtensions,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this._route.snapshot.params.id
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          console.log("Ruta redirigida:", event.urlAfterRedirects);
      }
  });
  }

  onBackTap(): void {
    this._routerExtensions.back()
  }

  onNextTap(){
    console.log("next")
  }
  


}
