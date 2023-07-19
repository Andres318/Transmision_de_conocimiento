import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { NuevaPublicacionStepperComponent } from "./nuevaPublicacionStepper/nuevaPublicacionStepper.component";

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    ItemDetailComponent,
    NuevaPublicacionStepperComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
