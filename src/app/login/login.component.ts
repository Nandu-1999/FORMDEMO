import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'FORMDEMO';
  constructor(private fb:FormBuilder){}
  loginForm = this.fb.group(
      {
        email: ['',[Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        password: ['',[Validators.required,Validators.minLength(6)]]
      }
    )    
  }
   


