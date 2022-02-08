import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductInterface } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css'],
})
export class ProductAlertComponent implements OnInit {
  @Input() product!: ProductInterface;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
