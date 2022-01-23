import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { PostDataService } from "./post-data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //   // name:"MyChannel";
  //   name: "";
  //   number1: number = 0;
  //   number2: number = 0;
  //   result: number = 0;
  //   openChannel(chanelName) {
  //     alert('chanelName')
  //   };
  //   getName(val) {
  //     console.log(val);
  //     this.name = val;
  //   };
  //   // getValue1(val){
  //   //   this.number1=parseFloat(val);
  //   // };
  //   // getValue2(val){
  //   //   this.number2=parseFloat(val);
  //   // };
  //   // sum(){
  //   //   this.result=this.number1+this.number2;
  //   //   console.log(this.result)
  //   // }

  //   // alternative
  //   sum(val1, val2) {
  //     this.result = parseFloat(val1) + parseFloat(val2);
  //   };

  //   success = "success";
  //   error = "error";
  //   underline = "underline";
  //   hasError = true;
  //   multiClass = ["success", "underline"];
  //   conditionMultipleClass = {
  //     "success": !this.hasError,
  //     "underline": !this.hasError,
  //     "error": this.hasError
  //   };
  //   inputText = "inputDefault";

  //   age = 15;
  //   color = "green";

  //   title = 'tutorialProject';

  //   usersNames = ["Julie", "Jack", "Ricky", "Paul"];
  //   users = [
  //     { name: "Julie", age: 26 },
  //     { name: "Jack", age: 32 },
  //     { name: "Ricky", age: 15 }
  //   ];

  //   productsType="Computers Parts";
  //   productsItems=[{
  //     name:'keyboards',
  //     color:'black',
  //   },
  //   {
  //     name:'screen',
  //     color:'white',
  //   }
  //   ];

  //   getData(data){
  //     // console.log(data);
  //     this.productsItems=data;
  //   }
  // allUsers=[];
  //   constructor(private service:UsersService) { 
  //     this.allUsers=service.getAllUsers();
  //   }


}
