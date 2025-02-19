import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() products!: ProductInterface[];
  @Output() deleteEvent = new EventEmitter<ProductInterface>();
  Delete (product: ProductInterface) {
    this.deleteEvent.emit(product);
  }
}










