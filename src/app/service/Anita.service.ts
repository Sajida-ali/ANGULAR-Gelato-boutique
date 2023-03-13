import { Injectable } from '@angular/core';
import { Anita } from '../models/Anita';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnitaService {
  baseURL:string='http://localhost:3000/';
  headers= {'content-type':'application/json'};
  constructor(private http:HttpClient) { 
  }
  getHomeProduct():Observable<any>{
    return this.http.get(this.baseURL+'HomeProduct')
  }
  getFlavors():Observable<any>{
    return this.http.get(this.baseURL+'Flavors')
  }
  getMacadamia():Observable<any>{
    return this.http.get(this.baseURL+'MACADAMIA')
  }

  getAlmond():Observable<any>{
    return this.http.get(this.baseURL+'ALMONDS')
  }
  getPistachu():Observable<any>{
    return this.http.get(this.baseURL+'PISTACHIO')
  }
  getforestfruit():Observable<any>{
   return this.http.get(this.baseURL+'FORESTFRUIT')
  }
  getMilkshake():Observable<any>{
    return this.http.get(this.baseURL+'MILKSHAKE')
  }
  getYogurt():Observable<any>{
    return this.http.get(this.baseURL+'YOGURT')
  }
}
