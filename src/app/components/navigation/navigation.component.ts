import { Component } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(private categoryService: CategoryService, private router: Router) {
    this.loadCategories();
  }

  categories: any;

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories
    })
  }
}
