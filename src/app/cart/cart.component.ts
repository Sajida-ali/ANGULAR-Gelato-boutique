import { Component, OnInit } from '@angular/core';
import { cartproduct } from '../models/cartProduct';
import { CartService } from "../service/cart.service";
import { Router } from '@angular/router';
import { Anita } from '../models/Anita';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
  products : cartproduct[] = [];
  total : number = 0

  constructor(private cartService: CartService, private router:Router){}

  ngOnInit(): void {
    this.calculateTotal();
    this.products = this.cartService.getItems()
    this.total = this.cartService.cart.total
  }
  calculateTotal() {
    this.total = 0;
    for (const b of this.products) {
      this.total += b.anitas.price * b.qty;
    }
  }
  clear(){
    this.cartService.clear()
    this.products = []
    this.total = this.cartService.cart.total
  }
  pay(){
    if(localStorage.getItem("email")){
      this.cartService.pay().subscribe(data=>{
        console.log(data)
        this.clear()
      })
      this.clear()
    }
    else{
      this.router.navigateByUrl("profile")
    }
  }
  subQty(product : Anita){
    this.cartService.removeFromCart(product)
    this.total = this.cartService.cart.total
  }
  addQty(product : Anita){
    this.cartService.addToCart(product)
    this.total = this.cartService.cart.total
  }
}


