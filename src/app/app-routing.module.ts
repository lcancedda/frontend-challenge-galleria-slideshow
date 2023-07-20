import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'slide/:id', component: SlideshowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
