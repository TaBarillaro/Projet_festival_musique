import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Artiste {
  id: number;
  nom: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtistesWebService {
  private readonly apiUrl = 'https://artists-api-ndhd.onrender.com/artists';

  constructor(private http: HttpClient) { }

  // GET
  getArtistes(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(this.apiUrl);
  }

  // POST /artistes
  ajouterArtiste(artiste: { nom: string; image: string }): Observable<Artiste> {
    return this.http.post<Artiste>(this.apiUrl, artiste);
  }

  // DELETE /artistes/:id
  supprimerArtiste(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
