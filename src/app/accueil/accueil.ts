import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss'
})
export class Accueil {

  showDescription = false;

  afficheDescription() {
      this.showDescription = !this.showDescription;
    }
}
