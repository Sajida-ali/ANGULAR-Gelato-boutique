import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userid',
  templateUrl: './userid.component.html',
  styleUrls: ['./userid.component.css']
})
export class UseridComponent implements OnInit {
  mail:any='';
  name:any ="";
  gender:any="";
  birthday:any="";
  img : any = "";
  refresh : any = sessionStorage.getItem('refresh')

  constructor(private actRoute:ActivatedRoute,private service:UserService) { }

  ngOnInit(): void {
   this.mail=this.actRoute.snapshot.params["mail"];
    let user = this.service.getUser(this.mail)
    if(user != null){
      this.name = user.name
      this.gender = user.gender
      this.birthday = user.date
      this.img = user.img
    }
  } 

}