import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
  _genre:string =''

  constructor() { }
  ngOnInit(): void {
  }
  setGenre(gen : string){
    this._genre = gen
  }


}
