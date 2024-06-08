import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent} from './contact/contact.component';
import { Products1Component } from './products1/products1.component';
import { ProductsComponent } from './products/products.component';
import { Products2Component } from './products2/products2.component';

const routes: Routes = [
  {path:"", component : HomeComponent} ,
  {path:"home", component : HomeComponent} ,
  {path:"about", component : AboutComponent} ,
  {path:"contact", component : ContactComponent} ,
  {path:"products1", component : Products1Component} ,
  {path:"products", component : ProductsComponent} ,
  {path:"products2", component : Products2Component} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
