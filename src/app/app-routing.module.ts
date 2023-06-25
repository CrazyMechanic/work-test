import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackedComponent } from './packed/packed.component';
import { CellSizeComponent } from './cell-size/cell-size.component';

const routes: Routes = [
  {path: ':uid', component: HomeComponent},
  {path: ':uid/packed', component: PackedComponent},
  {path: ':uid/cell-size', component: CellSizeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
