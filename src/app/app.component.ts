import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PreloaderComponent } from './preloader/preloader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OffcanvasCartComponent } from './offcanvas-cart/offcanvas-cart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PreloaderComponent,HeaderComponent,FooterComponent,OffcanvasCartComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
}
