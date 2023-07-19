import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { PublicacionesTabComponent } from "./publicacionesTab/publicacionesTab.component";

@NgModule({
  imports: [NativeScriptCommonModule, SearchRoutingModule],
  declarations: [SearchComponent, PublicacionesTabComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}
