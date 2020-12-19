import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup
  constructor(fb: FormBuilder) {

    let loginControls={
      
      email: new FormControl("",[
        Validators.required
      ]),
      password: new FormControl("",[
        Validators.required
      ]),
      
    }
    this.loginForm = fb.group(loginControls)
   }
   

  ngOnInit(): void {
  }

  public loginUser():void{
    console.log(this.loginForm.value)
  }
  

}
