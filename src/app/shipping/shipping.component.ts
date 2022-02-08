import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  shippingData = this.cartService.getShippingPrice();

  ngOnInit() {
    this.shippingData.forEach((item) => {
      console.log(item);
    });
    // console.log(this.shippingData);
  }
}
