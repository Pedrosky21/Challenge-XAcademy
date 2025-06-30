import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  register(userName: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/register`,
      {
        userName,
        password,
      },
      {
        withCredentials: true,
      }
    );
  }

  login(userName: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/login`,
      {
        userName,
        password,
      },
      {
        withCredentials: true,
      }
    );
  }
}
