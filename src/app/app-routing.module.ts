import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarrierComponent } from './carrier/carrier.component';

const routes: Routes = [

	{path:"home", component:HomeComponent}, 
   	{path:"contact", component:ContactComponent},
	{path:"carrier", component:CarrierComponent},
	{path:"gallery", component:GalleryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [HomeComponent,ContactComponent,GalleryComponent,CarrierComponent];
