import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersApiService {
  private apiUrl = 'http://localhost:3000/api/malePlayers';

  constructor(private http: HttpClient) { }

  createPlayer(player: any): Observable<any> {
    return this.http.post(this.apiUrl, player);
  }

  updatePlayer(id: string, player: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, player);
  }

  getPlayer(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getPlayers(params: any): Observable<any> {
    return this.http.get(this.apiUrl, {params});
  }

  downloadPlayers(params:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/export`, {params, responseType: 'blob'})
  }
}
