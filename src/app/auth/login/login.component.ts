import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    // Call your Java backend (Spring Boot in Java 23) for authentication.
    this.http
      .post<{ token: string }>('http://localhost:8080/api/auth/login', {
        username: this.username,
        password: this.password,
      })
      .subscribe((response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      });
  }
}
