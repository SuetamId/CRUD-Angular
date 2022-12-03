import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly Api ='http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

   getUsers(){
    return this.httpClient.get<User[]>(`${this.Api}/users`)
    .pipe(
      delay(5000),
      tap(user => console.log(user))
    );
  }

}
