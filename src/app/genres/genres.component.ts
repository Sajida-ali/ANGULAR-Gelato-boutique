import {EventEmitter, Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  @Output() changeGenre : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendFlavores(){
    this.changeGenre.emit("Flavors")
  }
  sendMacadamia(){
    this.changeGenre.emit("MACADAMIA")
  }
  sendAlmond(){
    this.changeGenre.emit("CHOCOLATE ALMONDS AND CARAMEL")
  }
  sendpistachu(){
    this.changeGenre.emit("PISTACHIO")
  }
  sendforstfruit(){
    this.changeGenre.emit("BLACK FOREST")
  }
  sendMilkshke(){
    this.changeGenre.emit("MILKSHAKE")
  }
  sendYogurt(){
    this.changeGenre.emit("YOGURT")
  }

}
