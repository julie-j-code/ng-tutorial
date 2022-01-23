import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { FormControl, FormGroup, RequiredValidator, Validator, Validators } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Angular Tutorial";
  loginForm=new FormGroup({
    email:new FormControl('',
    [Validators.required, Validators.email]),
    password : new FormControl('', 
    [Validators.required, Validators.minLength(8)])
  });

  getValues(){
    // on peur voir dans la console que si les champs sont valids, la classe qui leur est affectée est ng-valid automatiquement
      console.log(this.loginForm.value);
  }

  // attention, c'est un getter ! 
  get validationsMessages(){
    return this.loginForm.controls;
  }


}
