import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-charts',
  templateUrl: './product-charts.component.html',
  styleUrls: ['./product-charts.component.css']
})
export class ProductChartsComponent implements OnInit {

  moneyValue: number = 540000;
  percentageChange: number = 56;
  
  constructor() {}
  ngOnInit() {}

}
