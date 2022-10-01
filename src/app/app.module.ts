import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttractionComponent } from './attraction/attraction.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AttractionComponent,
    BottombarComponent,
    HistoryComponent,
    HomeComponent,
    MapComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
