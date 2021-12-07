import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrapperAccountComponent } from './scrapper-account/scrapper-account.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { MetadataComponent } from './metadata/metadata.component';
import { MediasComponent } from './medias/medias.component';
import { ScrapperComponent } from './scrapper/scrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrapperAccountComponent,
    GamelistComponent,
    MetadataComponent,
    MediasComponent,
    ScrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
