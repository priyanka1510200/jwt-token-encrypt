import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  email: string = '';
  showLogin: boolean = true;

  constructor(private api: LoginService, private store: Store<AuthState>) {}

  ngOnInit(): void {}

  toggleForm(showLogin: boolean): void {
    this.showLogin = showLogin;
  }

  login(): void {
    this.api.login(this.username, this.password).subscribe({
      next: () => {
        console.log('Login successful');
      },
      error: (err) => {
        console.error('Login error:', err);
      },
    });
  }

 

  

  register(): void {
    this.api.register(this.username, this.password, this.email).subscribe({
      next: (response) => {
        console.log(response.message);
        this.login();
      },
      error: (err) => {
        console.error('Registration error:', err);
      },
    });
  }
}
