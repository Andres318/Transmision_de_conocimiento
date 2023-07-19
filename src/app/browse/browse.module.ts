import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { BrowseRoutingModule } from "./browse-routing.module";
import { BrowseComponent } from "./browse.component";
import { BucaramangaTabComponent } from "./bucaramangaTab/bucaramangaTab.component";
import { SocorroTabComponent } from "./socorroTab/socorroTab.component";
import { SangilTabComponent } from "./sangilTab/sangilTab.component";
import { VelezTabComponent } from "./velezTab/velezTab.component";

@NgModule({
  imports: [NativeScriptCommonModule, BrowseRoutingModule],
  declarations: [
    BrowseComponent,
    BucaramangaTabComponent,
    SocorroTabComponent,
    SangilTabComponent,
    VelezTabComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BrowseModule {}
