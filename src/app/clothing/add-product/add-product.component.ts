import { Component, OnInit } from '@angular/core';

// import { Product } from ../../model/product;
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  public product: Product;
  public message: string;
  constructor() { 
    this.product = new Product("", 0, "URL");
  }

validateform(formVarriable){
  if (formVarriable.invalid){
    this.message = 'you forgot something'
  }

}

  ngOnInit() {

  }



}
import { Component } from '@angular/core';
import { Product } from 'app/model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  public message = '';
  constructor() { }

  createProduct(productForm) {
    if (productForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const product: Product = productForm.value.product;
      console.log('Creating product', product);
    }
  }

}
