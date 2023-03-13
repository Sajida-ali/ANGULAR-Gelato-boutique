import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})

export class UserService{
  baseURL:string='http://localhost:3000/';
  headers= {'content-type':'application/json'};
  obsv: any = this.getobserv();
  users:any=[]
  constructor(private http:HttpClient){
    this.users=this.getallusers()
  } 

  getobserv():Observable<any>{
    return this.http.get(this.baseURL + 'Users')
  }
  getallusers(){
    this.getobserv().subscribe((data)=>{
      console.log(data)
      this.users=data
    })
  }
  getUser(mail:string){
    for (let user of this.users) {
      if(user.email==mail){
            return user;
      }
    }
    return null;
  }
  isExist(mail : string){
    for(let user of this.users){
      if(user.email==mail)
      return true ;
    }
    return false ;
  }
  addUser(name:string ,mail:string,password:string,gender:string,date:string):Observable<any>{
    let user =new User(name,mail,password,gender,date);
    let body = JSON.stringify(user);
    return this.http.post(this.baseURL + 'Users', body, {
      headers: this.headers,});
  }
  login(email:string,password:string){
    for(let user of this.users){
      if(user.email == email && user.password==password){
        return true;
      }
    }
    return false;
  }
}     