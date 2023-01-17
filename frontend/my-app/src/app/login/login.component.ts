import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginUserData: any = {};

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  loginUser = () => {
    console.log('hello world');
    //let aa=res.toString
    // console.log(this.loginUser);
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', Object.values(res).toString());
        this._router.navigate(['/special']);
      },
      (err) => console.log(err)
    );
  };
}
