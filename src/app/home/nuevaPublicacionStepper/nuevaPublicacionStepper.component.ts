import { Component, OnInit } from "@angular/core";

import { NuevaPublicacionStepper } from "./shared/nuevaPublicacionStepper.model";

@Component({
  selector: "nuevaPublicacionStepper",
  templateUrl: "nuevaPublicacionStepper.component.html",
})
export class NuevaPublicacionStepperComponent implements OnInit {
  nuevaPublicacionStepper: NuevaPublicacionStepper[] = [];

  constructor() {}

  ngOnInit() {}
}
