import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { UsersComponent } from './components/users/users.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductComponent } from './components/products/product.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/users/user/user.component';
import { CProductComponent } from './components/products/c-product/c-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
const appRoutes : Routes = [
  {
    path: '', component:DashbordComponent, 
  },
  {
    path: 'product', component:ProductComponent, 
  },
  {
    path: 'user', component:UsersComponent, 
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    UsersComponent,
    NavigationComponent,
    ProductComponent,
    UserComponent,
    CProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
