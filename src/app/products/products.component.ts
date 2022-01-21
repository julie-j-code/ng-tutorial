import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() productsType:string;
  @Input() productsItems:any;
  @Output() childEvent : EventEmitter<any> = new EventEmitter();
  newProductsItems=[{
    name:'mouse',
    color:'pink',
  },
  {
    name:'monitor',
    color:'yellow',
  }
  ];
  constructor() { }

  ngOnInit(): void {
       
    // this.childEvent.emit(this.newProductsItems)
  }

  sendNewProducts(){
    // this.productsItems=this.newProductsItems;
    this.childEvent.emit(this.newProductsItems);
  }

}
