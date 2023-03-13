import { Component, OnInit,Input } from '@angular/core';
import { Anita } from '../models/Anita';
import { AnitaService } from '../service/Anita.service';
import { CartService } from '../service/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  agenre : any = []
  a : any=[]

  @Input()
    set genre(genre:any){
      console.log(genre)
      this.agenre=genre

      if(genre == 'MACADAMIA')
        this.a = this.getMacadamia()
      else if(genre == 'CHOCOLATE ALMONDS AND CARAMEL')
        this.a = this.getAlmond()
      else if(genre == 'PISTACHIO')
        this.a = this.getPistachu()
      else if(genre == 'Flavors')
        this.a = this.getFlavors()
      else if(genre == 'MILKSHAKE')
        this.a = this.getMilkshake()
        else if(genre == 'YOGURT')
        this.a = this.getYogurt()
      else
        this.a = this.getforestfruit()
    }
    get genre():string {return this.agenre}

  constructor(private service: AnitaService , private cartService : CartService) { }

  ngOnInit(): void {
    this.a = this.service.getFlavors();
    this.getFlavors();
  }

  addtocart(anita : Anita){
    this.cartService.addToCart(anita);
  }

  getHomeProduct(){
    this.service.getHomeProduct().subscribe((data)=>{
    console.log(data);
    this.a=data;
    })
  }

  getFlavors(){
    this.service.getFlavors().subscribe((data)=>{
    console.log(data);
    this.a=data;
    })
  }

  getMacadamia(){
    this.service.getMacadamia().subscribe((data)=>{
    console.log(data);
    this.a=data;
    })
  }

  getAlmond(){
    this.service.getAlmond().subscribe((data)=>{
    console.log(data);
    this.a=data;
    })
  }

  getPistachu(){
    this.service.getPistachu().subscribe((data)=>{
    console.log(data);
    this.a=data;
    })
  }

  getforestfruit(){
    this.service.getforestfruit().subscribe((data)=>{
    console.log(data);
    this.a=data;
    })
  }

  getMilkshake(){
    this.service.getMilkshake().subscribe((data)=>{
    console.log(data);
    this.a=data;
    })
  }
  getYogurt(){
    this.service.getYogurt().subscribe((data)=>{
    console.log(data);
    this.a=data;
    })
  }

}
    

