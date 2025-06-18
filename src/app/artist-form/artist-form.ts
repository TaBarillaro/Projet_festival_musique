import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-artist-form',
  imports: [ReactiveFormsModule],
  templateUrl: './artist-form.html',
  styleUrl: './artist-form.scss'
})
export class ArtistForm {
  artist = new FormControl('');
}
