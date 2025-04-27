import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export type User = {
  username: string;
  gender?: 'male' | 'female';
  age?: number;
};

@Injectable({ providedIn: 'root' })
export class AuthService {

  readonly userSignal = signal<User | null>(null);

  constructor(private router: Router) {}

  login(username: string): void {
    this.userSignal.set({ username });
    this.router.navigate(['/']);      
  }

  register(data: User): void {
    this.userSignal.set(data);
    this.router.navigate(['/']);
  }

  logout(): void {
    this.userSignal.set(null);
  }
}
