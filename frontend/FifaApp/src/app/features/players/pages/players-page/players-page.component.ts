import { Component } from '@angular/core';

import { PlayersApiService } from '../../../../core/services/players/players-api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss'
})
export class PlayersPageComponent {
  players: any[] = [];

  params = {
    page: 1
  }

  constructor(
    private playersApiService: PlayersApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playersApiService.getPlayers(this.params).subscribe({
      next: (response) => {
        this.players = response;
      },
      error: (error) => {
        console.error('Error obteniendo jugadores:', error);
      }
    })
  }

}
