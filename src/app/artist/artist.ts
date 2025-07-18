import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artiste } from '../artistes-web';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist.html',
  styleUrl: './artist.scss'
})
export class Artist {
  artiste = input.required<Artiste>();

}
