import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { SearchComponent } from "./search.component";
import { PublicacionesTabComponent } from "./publicacionesTab/publicacionesTab.component";

const routes: Routes = [
  {
    path: "default",
    component: SearchComponent,
    children: [
      {
        path: "publicacionesTab",
        component: PublicacionesTabComponent,
        outlet: "publicacionesTab",
      },
    ],
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SearchRoutingModule {}
