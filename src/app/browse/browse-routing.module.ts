import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { BrowseComponent } from "./browse.component";
import { BucaramangaTabComponent } from "./bucaramangaTab/bucaramangaTab.component";
import { SocorroTabComponent } from "./socorroTab/socorroTab.component";
import { SangilTabComponent } from "./sangilTab/sangilTab.component";
import { VelezTabComponent } from "./velezTab/velezTab.component";

const routes: Routes = [
  {
    path: "default",
    component: BrowseComponent,
    children: [
      //Municipios
      {
        path: "bucaramangaTab",
        component: BucaramangaTabComponent,
      },
      { 
        path: "socorroTab",
        component: SocorroTabComponent 
      },
      {
        path: "velezTab",
        component: VelezTabComponent,
      },
      { 
        path: "sangilTab",
        component: SangilTabComponent 
      },
      //Categorias
      // {
      //   path: "bucaramangaTab",
      //   component: BucaramangaTabComponent,
      // },
      // { 
      //   path: "socorroTab",
      //   component: SocorroTabComponent 
      // },
      // {
      //   path: "velezTab",
      //   component: VelezTabComponent,
      // },
      // { 
      //   path: "sangilTab",
      //   component: SangilTabComponent 
      // },
    ],
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BrowseRoutingModule {}
