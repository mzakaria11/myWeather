import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Import additional services as needed (e.g., AuthenticationService)

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';
  loginForm: FormGroup;
  loginError: string = '';


  constructor(private authService: AuthenticationService, private router: Router) { 

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
  
    });
  }
  

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      
  
      this.authService.login(email, password)
        .then(res => {
          console.log('Logged in:', res);
          this.router.navigate(['/weather']);
          // Navigate to another page or perform other actions upon successful login
        })
        .catch(err => {
          console.error('Login failed:', err);
          this.loginError = 'Password or email is not correct';
          // Handle errors (e.g., show an error message)
        });
    }
  }


  goToSignUp() {

    this.router.navigate(['/signup']);

  }



}