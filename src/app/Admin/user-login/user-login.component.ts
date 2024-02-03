import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginRequest } from '../models/login-request.model';
import { AuthService } from '../services/auth.service';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'SSS-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  model: LoginRequest;

  constructor(private authService: AuthService,
    private cookieService: CookieService,
    private router: Router) {
    this.model = {
      email: '',
      password: ''
    };
  }

  onFormSubmit() : void {
      console.log(this.model);
     this.authService.login(this.model)
     .subscribe({
       next: (response) => {
          console.log(response)
        // Set Auth Cookie
        this.cookieService.set('Authorization', `Bearer ${response.token}`,
        undefined, '/', undefined, true, 'Strict');

        // Set User
        this.authService.setUser({
          email: response.email,
          roles: response.roles
        });

        // Redirect back to Home
        this.router.navigateByUrl('/mainhome');

       }
     });
  }
}
