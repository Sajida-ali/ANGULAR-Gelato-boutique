import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GenresComponent } from './genres/genres.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { UseridComponent } from './userid/userid.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'catalog',component:CatalogComponent},
  {path:'cart',component:CartComponent},
  {path:'product',component:ProductComponent},
  {path:'genres',component:GenresComponent},
  {path:'userid/:mail',component:UseridComponent},

  
  {path:'profile',component:ProfileComponent,children:[
    {path:'',pathMatch:'full',redirectTo:'login'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
  ]},

  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
