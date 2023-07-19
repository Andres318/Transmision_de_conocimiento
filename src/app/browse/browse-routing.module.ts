import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'

import { BrowseComponent } from './browse.component'
import { BucaramangaTabComponent } from './bucaramangaTab/bucaramangaTab.component'

const routes: Routes = [
  { path: 'default', component: BrowseComponent },
//   {
//     path: 'bucaramanga',
//     component: NSEmptyOutletComponent,
//     loadChildren: () => import('~/bucaramangaTab/bucaramangaTab.module').then((m) => m.HomeModule),
//     outlet: 'bucaramangaTab',
// }
  // { path: "bucaramangaTab", 
  //   component: BucaramangaTabComponent, 
  // },
  // { path: "opcion2", component: Opcion2Component },
  // { path: "opcion3", component: Opcion3Component }
  // Otras rutas de la aplicación
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BrowseRoutingModule {}
