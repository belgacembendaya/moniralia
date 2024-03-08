import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent} from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import {TeamComponent  } from './team/team.component';


const routes: Routes = [
 
  {path:"home", component : HomeComponent} ,
  {path:"about", component : AboutComponent} ,
  {path:"contact", component : ContactComponent} ,
  {path:"products", component : ProductsComponent} ,
  {path:"team", component : TeamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
