import { Injectable } from '@angular/core';
import { Anita } from "../models/Anita";
import { Cart } from "../models/cart";
import { cartproduct } from '../models/cartProduct';
import { User } from '../models/user';
import {HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    baseURL:string="http:/localhost:3000/";
    headers={'content-type':'application/json'};
    cart : Cart = new Cart()
    constructor(private http:HttpClient) { }
  
    getItems(){
      return this.cart.items
    }
    addToCart(product : Anita){
      this.cart.add(product);
    }
  
    removeFromCart(product : Anita){
      this.cart.remove(product);
    }
  
    updateUser(user:User){
      this.cart.user = user
    }
  
    pay(): Observable<any>{
      console.log(this.cart);
      let body =JSON.stringify({user:this.cart.user,anita:this.cart.items,sum:this.cart.total})
      return this.http.post(this.baseURL+'cart',body,{
        headers:this.headers,
      });
        this.clear() 
    }
    clear(){
      this.cart = new Cart()
    }
  }
