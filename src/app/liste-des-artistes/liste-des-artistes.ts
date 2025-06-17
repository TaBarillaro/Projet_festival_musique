import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-liste-des-artistes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-des-artistes.html',
  styleUrl: './liste-des-artistes.scss'
})
export class ListeDesArtistes {
  artistes = [
    {nom: 'Giulia Rossi', image: "/images/artiste2.jpg"},
    {nom: 'Marco Bianchi', image: "/images/artiste1.jpg"},
    {nom: 'Elena Ferraro', image: "/images/artiste3.jpg"},
  ]
}
