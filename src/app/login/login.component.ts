import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  title = 'FORMDEMO';
  public loginForm! : FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email: ['',[Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        password: ['',[Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
      }
    )  
  }
    
  }
   


