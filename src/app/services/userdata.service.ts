import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users(){

    return [
      {name:'Anil', age : 28, mailid: 'Anil@test.com'},
      {name:'Spiduu', age : 22, mailid: 'spidu@test.com'},
      {name:'ironman', age : 25, mailid: 'iron@test.com'},
      {name:'captain', age : 21, mailid: 'captain@test.com'}
    ]
  }
}
