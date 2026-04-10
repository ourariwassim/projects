import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { userInterface } from '../../types/user.interface';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) {}
  login(email: string, password: string) {
    this.userService.logIn(email, password).subscribe((user: userInterface) => {
      localStorage.setItem('id', user.id);
      this.router.navigate(['dashboard']);
    });
  }
}
