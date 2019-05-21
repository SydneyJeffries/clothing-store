import { Component, OnInit } from '@angular/core';

// import { Product } from ../../model/product;
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  public product: Product
  
  constructor() { 
    this.product = new Product("", 0, "URL");
  }

validateform(formVarriable){
  if (formVarriable.valid){
    this.product = formVarriable.value.product
  }

}

  ngOnInit() {

  }



}
