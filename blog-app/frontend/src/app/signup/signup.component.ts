import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UserService } from '../../services/user/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ButtonComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) {}
  signUp(email: string, password: string) {
    this.userService.signUp(email, password).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
