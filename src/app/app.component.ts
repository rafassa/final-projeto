import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { HeaderComponent } from './paginaUsuaria/header/header.component';
import { FooterComponent } from './paginaUsuaria/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mercado';
}