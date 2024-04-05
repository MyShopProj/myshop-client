import { Component } from '@angular/core';
import {NavigationComponent} from "../components/navigation/navigation.component";
import {ProductComponent} from "../components/product/product.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    NavigationComponent,
    ProductComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
