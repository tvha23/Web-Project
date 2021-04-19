import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "cart", component: CartComponent }
=======
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
