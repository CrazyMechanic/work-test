import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PackedComponent } from './packed/packed.component';
import { CellSizeComponent } from './cell-size/cell-size.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackedComponent,
    CellSizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
