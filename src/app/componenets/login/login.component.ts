import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private router :Router ) {}
   loginForm:FormGroup;
   errorMSG:string;
  ngOnInit(){
    this.loginForm= this.formBuilder.group({
       email:["",[Validators.required,Validators.email]],
       pwd:["",[Validators.required]],
     })
   }
   login()
 {
  let user=this.loginForm.value;
  let users=JSON.parse(localStorage.getItem("users") || '[]');
  let findedUser;
  for (let i = 0; i < users.length; i++) {
       if (users[i].email==user.email && users[i].pwd===user.pwd) {
         localStorage.setItem("connectedUserId",users[i].id)   ;
         findedUser=users[i];
         break;     
        
       }
     }

     if (findedUser) {
       if (findedUser.role=="admin") {this.router.navigate(["admin"])
        
       } else {
        this.router.navigate([""]);
        
       }
      
     } else {
      this.errorMSG="Pleases check Email/Pwd"
      
     }
   
 }
}
