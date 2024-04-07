import { Routes } from '@angular/router';
import {ShopComponent} from "./shop/shop.component";
import {ProductDetailPageComponent} from "./product-detail-page/product-detail-page.component";

export const routes: Routes = [
  {path: '', component: ShopComponent},
  {path: 'product/:id', component: ProductDetailPageComponent}
];
