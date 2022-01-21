import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getAllUsers() {
    return [
      {
        name: "John",
        age: 28,
        email: "john@gmail.com"
      },
      {
        name: "Marc",
        age: 15,
        email: "marc@gmail.com"
      },
      {
        name: "Suzane",
        age: 36,
        email: "suzane@gmail.com"
      }
    ]
  };

}
