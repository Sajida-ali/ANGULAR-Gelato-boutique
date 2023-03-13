import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  email: any;
  pass: any;
  
    constructor(private builder:FormBuilder,private router:Router,private userService:UserService) { }
  
    ngOnInit(): void {
      this.createLoginForm();
    }
    createLoginForm(){
  this.loginForm = this.builder.group({
    mail : [''],
    password :['']
  })
    }
    onSubmit(){
      this.userService.getallusers()
      let mail =this.loginForm.value.mail
      let pass =this.loginForm.value.password
      if(this.userService.login(mail,pass))
      {
        alert("connected");
        this.router.navigate(['/userid',mail]);
      }
      else 
        alert("wrong password or email")
    }
    back(){
      this.router.navigateByUrl("profile/register");
    }
  }
  