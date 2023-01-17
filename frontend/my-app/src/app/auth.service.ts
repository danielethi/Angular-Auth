import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerURL = 'http://localhost:2050/users/register';
  private _loginURL = 'http://localhost:2050/users/register';

  constructor(private http: HttpClient) {}

  registerUser = (user: any) => {
    return this.http.post(this._registerURL, user);
  };
  loginUser = (user: any) => {
    return this.http.post(this._loginURL, user);
  };

  loggedIn = () => {
    return !!localStorage.getItem('token');
  };
}
