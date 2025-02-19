import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInterface } from './product-interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  categories = [
    {
      id: 1,
      name: "Gadjets",
    },
    {
      id: 2,
      name: "Furniture",
    },
    {
      id: 3,
      name: "Home appliances",
    },
    {
      id: 4,
      name: "Computers",
    },
  ];
  FilteredProducts: ProductInterface[] = [];
  products: ProductInterface[] = [
    {
      id: 1,
      name: "Apple iPhone 13 128Gb черный",
      category: "Gadjets",
      image: "img1.png",
      price: 277960,
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
      likes: 0,
    },
    {
      id: 2,
      name: "Apple iPhone 13 128Gb белый",
      category: "Gadjets",
      image: "img2.png",
      price: 284300,
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000",
      likes: 0,
    },
    {
      id: 3,
      name: "Xiaomi Redmi 13C 8 ГБ/256 ГБ черный",
      category: "Gadjets",
      image: "img3.png",
      price: 52999,
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000",
      likes: 0,
    },
    {
      id: 4,
      name: "Realme Note 50 3 ГБ/64 ГБ черный",
      category: "Gadjets",
      image: "img4.png",
      price: 37490,
      rating: 5,
      link: "https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000",
      likes: 0,
    },
    {
      id: 5,
      name: "Для Apple iPhone 13 черный",
      category: "Gadjets",
      image: "img5.png",
      price: 647,
      rating: 5,
      link: "https://kaspi.kz/shop/p/dlja-apple-iphone-13-chernyi-113767097/?c=750000000",
      likes: 0,
    },
    {
      id: 6,
      name: "Deerma DX700 белый",
      category: "Home appliances",
      image: "img6.png",
      price: 15999,
      rating: 5,
      link: "https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000",
      likes: 0,
    },
    {
      id: 7,
      name: "Generic SF-400",
      category: "Home appliances",
      image: "img7.png",
      price: 740,
      rating: 5,
      link: "https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000",
      likes: 0,
    },
    {
      id: 8,
      name: "Электрочайник Yingzheng ZY-305 черный",
      category: "Home appliances",
      image: "img8.png",
      price: 4199,
      rating: 5,
      link: "https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000",
      likes: 0,
    },
    {
      id: 9,
      name: "Slaouwo HB-2075 черный",
      category: "Home appliances",
      image: "img9.png",
      price: 6788,
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000",
      likes: 0,
    },
    {
      id: 10,
      name: "Artel VCC 0220 серый",
      category: "Home appliances",
      image: "img10.png",
      price: 38120,
      rating: 5,
      link: "https://kaspi.kz/shop/p/artel-vcc-0220-seryi-3701268/?c=750000000",
      likes: 0,
    },
    {
      id: 11,
      name: "Стул C06, 80x46x40 см, белый",
      category: "Furniture",
      image: "img11.png",
      price: 4998,
      rating: 5,
      link: "https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000",
      likes: 0,
    },
    {
      id: 12,
      name: "Morbido диван прямой Комфорт, обивка микровелюр",
      category: "Furniture",
      image: "img12.png",
      price: 54935,
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000",
      likes: 0,
    },
    {
      id: 13,
      name: "Стол письменный с надстройкой 40x114x140 см,",
      category: "Furniture",
      image: "img13.png",
      price: 14438,
      rating: 4.4,
      link: "https://kaspi.kz/shop/p/stol-pis-mennyi-s-nadstroikoi-40x114x140-sm-stolpis002-106541589/?c=750000000",
      likes: 0,
    },
    {
      id: 14,
      name: "Игровое кресло ATLANTA мебель GC-1050, черный",
      category: "Furniture",
      image: "img14.png",
      price: 33760,
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/igrovoe-kreslo-atlanta-mebel-gc-1050-chernyi-krasnyi-110203637/?c=750000000",
      likes: 0,
    },
    {
      id: 15,
      name: "Вешалка напольная Singleton TW610, металл, 150x154 см",
      category: "Furniture",
      image: "img15.png",
      price: 4899,
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/veshalka-napol-naja-singleton-tw610-metall-150x154-sm-chernyi-106301738/?c=750000000",
      likes: 0,
    },
    {
      id: 16,
      name: "Wireless Mouse черный",
      category: "Computers",
      image: "img16.png",
      price: 840,
      rating: 5,
      link: "https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000",
      likes: 0,
    },
    {
      id: 17,
      name: "Сумка Portcase 9011 черный",
      category: "Computers",
      image: "img17.png",
      price: 3950,
      rating: 5,
      link: "https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000",
      likes: 0,
    },
    {
      id: 18,
      name: "Art Strata 900x400x3 рисунок",
      category: "Computers",
      image: "img18.png",
      price: 1612,
      rating: 5,
      link: "https://kaspi.kz/shop/p/art-strata-900x400x3-risunok-109753958/?c=750000000",
      likes: 0,
    },
    {
      id: 19,
      name: "Artel VCC 0220 серый",
      category: "Computers",
      image: "img19.png",
      price: 679,
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/x-game-xm-770oub-chernyi-9101354/?c=750000000",
      likes: 0,
    },
    {
      id: 20,
      name: "AIRSTAR G2000 10 дюйм 16 Гб/512 Гб черный",
      category: "Computers",
      image: "img20.png",
      price: 30689,
      rating: 4.2,
      link: "https://kaspi.kz/shop/p/airstar-g2000-10-djuim-16-gb-512-gb-chernyi-124333904/?c=750000000",
      likes: 0,
    },
  ]
  onCategoryClick(category: string) {
    console.log('Выбрана категория:', category);
  }
  filterProducts(category: string) {
    this.FilteredProducts = this.products.filter((product) => product.category === category);
  }
  Delete (product: ProductInterface) {
    // console.log(product.id);
    this.products = this.products.filter(prod => prod.id !== product.id);
    // console.log(this.products);
    this.filterProducts(product.category);
    
  }
  
}
