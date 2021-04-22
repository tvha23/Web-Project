import { Product } from './../../models';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = this.service.getCartItems();
  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  });


  constructor(private service: CartService,
    private formBuilder: FormBuilder) { }

  cartNotEmpty() {
    return !this.service.isEmpty()
  }

  onSubmit(): void {
    this.products = this.service.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    
  }

}
