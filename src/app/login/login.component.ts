import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message = '';
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    }) 
  }
  // login(){
    
  //   if(this.login == "dion" && this.password == "Fiacre95"){
  //     this.message=false;
  //     this.router.navigate(['/admin']);
  //   }else {
  //     this.message= true;
  //     setInterval
  //   }
  // }
}