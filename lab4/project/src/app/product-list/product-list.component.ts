import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductInterface } from '../product-interface';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: ProductInterface[] = [
    {
      id: 1,
      name: "Apple iPhone 13 128Gb черный",
      image: "img1.png",
      price: 277960,
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
    },
    {
      id: 2,
      name: "Apple iPhone 13 128Gb белый",
      image: "img2.png",
      price: 284300,
      rating: 5,
      link: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large",

    },
    {
      id: 3,
      name: "Xiaomi Redmi 13C 8 ГБ/256 ГБ черный",
      image: "img3.png",
      price: 52999,
      rating: 4.5,
      link: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large",

    },
    {
      id: 4,
      name: "snbfd ashgjkrteg n dfrghtb rmf djfgthn5  sauidht5 dfgb sdfjghgymnfds",
      image: "img3.png",
      price: 234123,
      rating: 5,
      link: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large",

    },
    // {
    //   id: 1,
    //   name: string,
    //   image: string,
    //   price: number,
    //   rating: number,
    // },
    // {
    //   id: 1,
    //   name: string,
    //   image: string,
    //   price: number,
    //   rating: number,
    // },
    // {
    //   id: 1,
    //   name: string,
    //   image: string,
    //   price: number,
    //   rating: number,
    // },
    // {
    //   id: 1,
    //   name: string,
    //   image: string,
    //   price: number,
    //   rating: number,
    // },
    // {
    //   id: 1,
    //   name: string,
    //   image: string,
    //   price: number,
    //   rating: number,
    // },
    // {
    //   id: 1,
    //   name: string,
    //   image: string,
    //   price: number,
    //   rating: number,
    // },
  
  ]
}









