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
    {id: 1, nom: 'Giulia Rossi', image: "/images/artiste2.jpg"},
    {id: 2, nom: 'Marco Bianchi', image: "/images/artiste1.jpg"},
    {id: 3, nom: 'Elena Ferraro', image: "/images/artiste3.jpg"},
  ];

  supprimerArtiste(index: number) {
    this.artistes.splice(index, 1);
  }
}
