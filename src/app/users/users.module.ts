import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [UserLoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ],
  exports : [
    UserLoginComponent,
    RegisterComponent
  ]
})
export class UsersModule {
 }
