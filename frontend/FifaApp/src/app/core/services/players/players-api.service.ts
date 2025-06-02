import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersApiService {
  private apiUrl = 'http://localhost:3000/api/malePlayers';

  constructor(private http: HttpClient) { }

  getPlayers(params: any): Observable<any> {
    return this.http.get(this.apiUrl, {params});
  }
}
