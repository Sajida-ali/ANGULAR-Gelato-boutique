import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  imgsajida='assets/img/sajidaa.jpg';
  imgnimer='assets/img/nimer.jpg'

  newstyle='black';
  isLight=true;
  change(){
    this.isLight=!this.isLight;
    if(this.isLight)
      this.newstyle='black';
    else
    this.newstyle='white';        
  }

  constructor(){ }
   ngOnInit():void{

   }


}
