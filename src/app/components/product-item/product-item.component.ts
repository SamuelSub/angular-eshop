import { Component, Input } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  constructor(private productsService: ProductsServiceService) {}

  @Input() productItem: any;

  onClickAddToCart(item: any) {
    this.productsService.addItemInCart(item)
  }

}
