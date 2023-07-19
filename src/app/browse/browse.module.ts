import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { BrowseRoutingModule } from "./browse-routing.module";
import { BrowseComponent } from "./browse.component";
import { BucaramangaTabComponent } from "./bucaramangaTab/bucaramangaTab.component";
import { SocorroTabComponent } from "./socorroTab/socorroTab.component";
import { SangilTabComponent } from "./sangilTab/sangilTab.component";
import { VelezTabComponent } from "./velezTab/velezTab.component";
import { TurismoTabComponent } from "./turismoTab/turismoTab.component";
import { GastronomiaTabComponent } from "./gastronomiaTab/gastronomiaTab.component";
import { ArtesaniaTabComponent } from "./artesaniaTab/artesaniaTab.component";
import { ArqueologiaTabComponent } from "./arqueologiaTab/arqueologiaTab.component";

@NgModule({
  imports: [NativeScriptCommonModule, BrowseRoutingModule],
  declarations: [
    BrowseComponent,
    BucaramangaTabComponent,
    SocorroTabComponent,
    SangilTabComponent,
    VelezTabComponent,
    TurismoTabComponent,
    GastronomiaTabComponent,
    ArtesaniaTabComponent,
    ArqueologiaTabComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BrowseModule {}
