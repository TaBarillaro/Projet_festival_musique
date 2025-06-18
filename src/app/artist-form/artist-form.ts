import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output() artisteAjoute = new EventEmitter<{ nom: string, image: string }>();

  artistForm = new FormGroup({
    name: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required)
  });

  ajouterArtiste() {
    if (this.artistForm.valid) {
      this.artisteAjoute.emit({
        nom: this.artistForm.value.name!,
        image: this.artistForm.value.photo!
      });
      this.artistForm.reset();
    }
  }
}
