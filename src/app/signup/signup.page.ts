import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
registrationForm: FormGroup;
constructor(private authService: AuthenticationService ,private router: Router) {
  this.registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}
  
onSubmit() {
  if (this.registrationForm.valid) {
    const email = this.registrationForm.value.email;
    const password = this.registrationForm.value.password;
    console.log(email, password);
    this.authService.signUp(email, password).then(result => {
        console.log('Logged in:', result);
        this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Login failed:', error);
    });
  }
}

goToLogin() {

  this.router.navigate(['/login']);

}

}
