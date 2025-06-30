import { Component } from '@angular/core';

import { PlayersApiService } from '../../../../core/services/players/players-api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss',
})
export class PlayersPageComponent {
  players: any[] = [];
  errorMessage: string = '';
  cargando = false;
  currentPage = 1;
  totalPages = 1;
  limit = 24

  params = {
    page: this.currentPage,
    limit: this.limit,
    long_name: '',
    player_positions: '',
    club_name: '',
    nationality_name: '',
  };

  constructor(
    private playersApiService: PlayersApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.params.page = this.currentPage;
    this.errorMessage = '';
    this.playersApiService.getPlayers(this.params).subscribe({
      next: (response) => {
        this.players = response;
      },
      error: (error) => {
        if (error.status === 404) {
          this.errorMessage = 'No se encontraron jugadores con esos criterios.';
          this.players = [];
        } else {
          this.errorMessage = 'Ocurrió un error al cargar los jugadores.';
        }
        console.error('Error obteniendo jugadores:', error);
      },
    });
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadPlayers()
  }

  onSearchSubmit(formData: any) {
    this.params.long_name = formData.long_name || '';
    this.params.player_positions = formData.player_positions || '';
    this.params.club_name = formData.club_name || '';
    this.params.nationality_name = formData.nationality_name || '';

    this.loadPlayers();
    console.log('Form submitted with data:', formData);
  }

  downloadCSV() {
    this.cargando = true;
    this.playersApiService.downloadPlayers(this.params).subscribe({
      next: (response) => {
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'players.xlsx';  // nombre del archivo
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al exportar:', error);
        this.cargando = false;
        alert('Error al generar el archivo.');
      }
    })
  };
}
