import { Component, OnInit } from '@angular/core';
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { Anita } from '../models/Anita';
import { Router } from '@angular/router';
import { AnitaService } from '../service/Anita.service';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {


  a1:Anita[]=[]
  c:Anita[]=[]
  a: any;
  
  constructor(private aService:AnitaService,private router:Router){}

  ngOnInit(): void {
    this.getHomeProduct()
    this.getFlavors()
  }
  getHomeProduct(): any {
    this.aService.getHomeProduct().subscribe((data)=>{
      this.a=data
    })
  }
  getFlavors() {
    this.aService.getFlavors().subscribe((data)=>{
      this.c=data
    })
  }

  icecream='assets/img/icecream.jpg';
  donats='assets/img/donats.jpg';
  Yogurt='assets/img/Yogurt.jpg';

  faFacebook=faFacebook
  faInstagram=faInstagram
  faTwitter=faTwitter

  orderIt(){
    this.router.navigateByUrl("catalog");
  }
}
