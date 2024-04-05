import {Category} from "./category.models";

export class Product {
  productId: number;
  productName: string;
  price: number;
  description: string;
  image: Blob;
  category: Category;

  constructor(productId: number, productName: string, price: number, description: string, image: Blob, category: Category) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
  }
}
