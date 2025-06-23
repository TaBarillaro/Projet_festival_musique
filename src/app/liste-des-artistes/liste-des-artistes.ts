import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistForm } from '../artist-form/artist-form';
import { Artiste, ArtistesWebService } from '../artistes-web';
import { Artist } from "../artist/artist";


@Component({
  selector: 'app-liste-des-artistes',
  standalone: true,
  imports: [CommonModule, ArtistForm, Artist],
  templateUrl: './liste-des-artistes.html',
  styleUrl: './liste-des-artistes.scss'
})
export class ListeDesArtistes {
  /* artistes = [
    {id: 1, nom: 'Giulia Rossi', image: "/images/artiste2.jpg"},
    {id: 2, nom: 'Marco Bianchi', image: "/images/artiste1.jpg"},
    {id: 3, nom: 'Elena Ferraro', image: "/images/artiste3.jpg"},
  ];

  supprimerArtiste(index: number) {
    this.artistes.splice(index, 1);
  }

  ajouterArtiste(artiste: { nom: string; image: string }) {
    // on calcule la longueur du tableau artistes pour prendre le dernier id et ajouter 1 pour le nouveau id
    const id = this.artistes.length ? Math.max(...this.artistes.map(a => a.id)) + 1 : 1;
    this.artistes.push({ id, nom: artiste.nom, image: artiste.image });
  } */

    artistes: Artiste[] = [];

    successMessage: string = '';
    errorMessage: string = '';

    constructor(private artisteService: ArtistesWebService) {}

    ngOnInit() {
      this.artisteService.getArtistes().subscribe(data => {
        this.artistes = data;
      });
    }

    ajouterArtiste(data: { name: string; photo: string }) {
      this.artisteService.ajouterArtiste(data).subscribe({
        next: (newArtiste) => {
          this.artistes.push(newArtiste);
          this.successMessage = "L'artiste a bien été ajouté";
          this.errorMessage = '';
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout:', err);
          this.errorMessage = err.error?.message || 'Erreur serveur inconnue';
          this.successMessage = '';
        }
      });
    }

    supprimerArtiste(index: number) {
      const artiste = this.artistes[index];

      this.artisteService.supprimerArtiste(artiste.id).subscribe({
        next: () => {
          this.artistes.splice(index, 1);
        },
        error: (err) => {
          console.error('Erreur lors de la suppression:', err);
        }
      });
    }

    artisteSelectionne: Artiste | null = null;

    afficherDetail(artiste: Artiste) {
      this.artisteSelectionne = artiste;
    }
}
