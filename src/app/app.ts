import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ListeDesArtistes } from "./liste-des-artistes/liste-des-artistes";

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, Navbar, ListeDesArtistes],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'projet_festival_musique';
}
