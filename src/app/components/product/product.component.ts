import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private productService: ProductService, private router: Router) {
    this.loadProducts();
  }

  products: any;

  loadProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products
    })
  }
}
