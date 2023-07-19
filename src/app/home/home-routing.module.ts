import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { NuevaPublicacionStepperComponent } from "./nuevaPublicacionStepper/nuevaPublicacionStepper.component";

const routes: Routes = [
  { path: "default", component: HomeComponent },
  { path: "item/:id", component: ItemDetailComponent },
  { path: "newPub", component: NuevaPublicacionStepperComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
