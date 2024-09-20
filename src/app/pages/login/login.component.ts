import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { loginModel } from '../../models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit{

  loginForm! : FormGroup;

  constructor(private formBuider: FormBuilder,
    private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuider.group(
      {
        email: ["", [Validators.required, Validators.email]],
        senha: ["", [Validators.required]]
      }
    );
  
  }
  submitLogin(){
    debugger
    var dadosLogin = this.loginForm.getRawValue() as loginModel;
  }

}
