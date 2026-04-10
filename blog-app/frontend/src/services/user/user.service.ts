import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userInterface } from '../../types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/user';

  constructor(private readonly http: HttpClient) {}

  logIn(email: string, password: string) {
    return this.http.post<userInterface>(this.url + '/login', {
      email,
      password,
    });
  }

  signUp(email: string, password: string) {
    return this.http.post(this.url + '/createUser', { email, password });
  }
}
