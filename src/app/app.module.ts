import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PackedComponent } from './packed/packed.component';
import { CellSizeComponent } from './cell-size/cell-size.component';
import { XxsComponent } from './cell-size/boxes/xxs/xxs.component';
import { XsComponent } from './cell-size/boxes/xs/xs.component';
import { SComponent } from './cell-size/boxes/s/s.component';
import { MComponent } from './cell-size/boxes/m/m.component';
import { LComponent } from './cell-size/boxes/l/l.component';
import { XlComponent } from './cell-size/boxes/xl/xl.component';
import { XxlComponent } from './cell-size/boxes/xxl/xxl.component';
import { XxxlComponent } from './cell-size/boxes/xxxl/xxxl.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackedComponent,
    CellSizeComponent,
    XxsComponent,
    XsComponent,
    SComponent,
    MComponent,
    LComponent,
    XlComponent,
    XxlComponent,
    XxxlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
