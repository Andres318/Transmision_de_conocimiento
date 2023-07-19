import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { BrowseRoutingModule } from './browse-routing.module'
import { BrowseComponent } from './browse.component'
import { BucaramangaTabComponent } from './bucaramangaTab/bucaramangaTab.component'
import { CaliTabComponent } from './caliTab/caliTab.component'

@NgModule({
  imports: [NativeScriptCommonModule, BrowseRoutingModule],
  declarations: [BrowseComponent, BucaramangaTabComponent, CaliTabComponent ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BrowseModule {}
