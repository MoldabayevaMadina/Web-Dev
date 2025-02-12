import { Component, Input } from '@angular/core';
import { ProductInterface } from '../product-interface';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: ProductInterface;
}




