import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GLOBAL_CONST } from './core/constant/Global.constant';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  GLOBAL_CONST = GLOBAL_CONST;
  title = 'frontend';
}
