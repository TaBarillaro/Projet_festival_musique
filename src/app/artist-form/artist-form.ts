import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './artist-form.html',
  styleUrl: './artist-form.scss'
})
export class ArtistForm {

  artisteAjoute = output<{ name: string, photo: string }>();

  artistForm = new FormGroup({
    name: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required)
  });

  ajouterArtiste() {
    if (this.artistForm.valid) {
      this.artisteAjoute.emit({
        name: this.artistForm.value.name!,
        photo: this.artistForm.value.photo!
      });
      this.artistForm.reset();
    }
  }
}
