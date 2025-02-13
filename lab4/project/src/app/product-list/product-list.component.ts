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
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000",

    },
    {
      id: 3,
      name: "Xiaomi Redmi 13C 8 ГБ/256 ГБ черный",
      image: "img3.png",
      price: 52999,
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000",

    },
    {
      id: 4,
      name: "Realme Note 50 3 ГБ/64 ГБ черный",
      image: "img4.png",
      price: 37490,
      rating: 5,
      link: "https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000",

    },
    {
      id: 5,
      name: "Для Apple iPhone 13 черный",
      image: "img5.png",
      price: 647,
      rating: 5,
      link: "https://kaspi.kz/shop/p/dlja-apple-iphone-13-chernyi-113767097/?c=750000000",
    },
    {
      id: 6,
      name: "Для Apple iPhone 13 прозрачный",
      image: "img6.png",
      price: 208,
      rating: 5,
      link: "https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-108272841/?c=750000000",
    },
    {
      id: 7,
      name: "Xiaomi MDY-12 ES 67W USB Type-C, USB белый",
      image: "img7.png",
      price: 1476,
      rating: 4,
      link: "https://kaspi.kz/shop/p/xiaomi-mdy-12-es-67w-usb-type-c-usb-belyi-106897965/?c=750000000",
    },
    {
      id: 8,
      name: "Samsung Galaxy A25 5G 6 ГБ/128 ГБ темно-синий",
      image: "img8.png",
      price: 94288,
      rating: 5,
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000",
    },
    {
      id: 9,
      name: "Кабель USB TypeC (M), Lightning белый",
      image: "img9.png",
      price: 399,
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/kabel-usb-typec-m-lightning-belyi-114949538/?c=750000000",
    },
    {
      id: 10,
      name: "Стекло OEM для Apple iPhone 13 прозрачный",
      image: "img10.png",
      price: 298,
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/steklo-oem-dlja-apple-iphone-13-prozrachnyi-106865452/?c=750000000",
    },
  
  ]
}









