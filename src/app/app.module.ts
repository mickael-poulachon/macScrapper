import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MetadataComponent} from "./pages/metadata/metadata.component";
import {ScrapperComponent} from "./pages/scrapper/scrapper.component";
import {GamelistComponent} from "./pages/gamelist/gamelist.component";
import {ScrapperAccountComponent} from "./pages/scrapper-account/scrapper-account.component";
import {MediasComponent} from "./pages/medias/medias.component";
import {MenuComponent} from './shared/menu/menu.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    ScrapperAccountComponent,
    GamelistComponent,
    MetadataComponent,
    MediasComponent,
    ScrapperComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
