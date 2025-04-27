import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {

  isRegister = false;

  username = '';
  password = '';

  gender: 'male' | 'female' | '' = '';
  age: number | '' = '';

  ages = Array.from({ length: 75 }, (_, i) => i + 16);  

  constructor(private auth: AuthService) {}

  handleSubmit(): void {
    if (!this.username.trim()) { return; }

    if (this.isRegister) {
      this.auth.register({
        username: this.username.trim(),
        gender:   this.gender || undefined,
        age:      typeof this.age === 'number' ? this.age : undefined
      });
    } else {
      this.auth.login(this.username.trim());
    }
  }

  switchMode(): void {
    this.isRegister = !this.isRegister;
  }
}
