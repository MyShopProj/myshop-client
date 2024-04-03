import { Component } from '@angular/core';
import {NavigationComponent} from "../components/navigation/navigation.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
