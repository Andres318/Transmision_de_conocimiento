import { Component, OnInit } from "@angular/core";

import { NuevaPublicacionStepper } from "./shared/nuevaPublicacionStepper.model";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "nuevaPublicacionStepper",
  templateUrl: "nuevaPublicacionStepper.component.html",
})
export class NuevaPublicacionStepperComponent implements OnInit {
  nuevaPublicacionStepper: NuevaPublicacionStepper[] = [];

  constructor(private _routerExtensions: RouterExtensions) {}

  ngOnInit() {}
  onBackTap(): void {
    this._routerExtensions.back();
  }
  onNextTap() {
    console.log("next");
  }
}
