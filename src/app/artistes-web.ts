// service
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Artiste {
  id: string;
  name: string;
  photo: string;
}

const API_URL = 'https://artists-api-ndhd.onrender.com/artists';
const TOKEN = 'f3e91f07a577250eb7bda4fccf37adf0';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  })
};

// le service est dispo globalement dans l'app
@Injectable({
  providedIn: 'root'
})
export class ArtistesWebService {

  constructor(private http: HttpClient) { }

  // GET
  getArtistes(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(API_URL, httpOptions);
  }

  // POST /artistes
  ajouterArtiste(data: { name: string; photo: string }): Observable<Artiste>  {
    return this.http.post<Artiste>(API_URL, data, httpOptions);
  }

  // DELETE /artistes/:id
  supprimerArtiste(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`, httpOptions);
  }
}
