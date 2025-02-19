import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductInterface } from '../product-interface';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  cnt_likes = 0;
  @Input() product!: ProductInterface;
  @Output() deleteEvent = new EventEmitter<ProductInterface>();
  Like() {
    this.product.likes++;
  };
  Delete() {
    this.deleteEvent.emit(this.product);
  };
}




