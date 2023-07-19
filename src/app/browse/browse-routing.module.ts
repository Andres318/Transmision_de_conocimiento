import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { BrowseComponent } from "./browse.component";
import { BucaramangaTabComponent } from "./bucaramangaTab/bucaramangaTab.component";
import { SocorroTabComponent } from "./socorroTab/socorroTab.component";
import { SangilTabComponent } from "./sangilTab/sangilTab.component";
import { VelezTabComponent } from "./velezTab/velezTab.component";
import { ArtesaniaTabComponent } from "./artesaniaTab/artesaniaTab.component";
import { TurismoTabComponent } from "./turismoTab/turismoTab.component";
import { GastronomiaTabComponent } from "./gastronomiaTab/gastronomiaTab.component";
import { ArqueologiaTabComponent } from "./arqueologiaTab/arqueologiaTab.component";
import { ItemDetailComponent } from "../home/item-detail/item-detail.component";

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
        component: SocorroTabComponent,
      },
      {
        path: "velezTab",
        component: VelezTabComponent,
      },
      {
        path: "sangilTab",
        component: SangilTabComponent,
      },
      //Categorias
      {
        path: "artesaniaTab",
        component: ArtesaniaTabComponent,
      },
      {
        path: "turismoTab",
        component: TurismoTabComponent,
      },
      {
        path: "gastronomiaTab",
        component: GastronomiaTabComponent,
      },
      {
        path: "arqueologiaTab",
        component: ArqueologiaTabComponent,
      },
    ],
  },
  { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BrowseRoutingModule {}
