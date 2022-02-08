import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductInterface, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: ProductInterface | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: ProductInterface) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart');
    console.log(this.cartService.getItems());
  }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    const productId = Number(params.get('productId'));

    this.product = products.find((item) => item.id === productId);
  }
}
