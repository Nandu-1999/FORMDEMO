import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formbuilder : FormBuilder,private http: HttpClientModule,private router : Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fullname:['',Validators.required ],
      mobilenumber:['',Validators.required,Validators.minLength(10),Validators.maxLength(12)],
      email:['',Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
      password:['',Validators.required, Validators.minLength(6)]
    })
  }
  signup(){
    alert("Signup Sucessful");
    this.router.navigate(['/login']);

  }

}
