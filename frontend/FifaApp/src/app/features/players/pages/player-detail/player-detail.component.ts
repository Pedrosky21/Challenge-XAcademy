import { Component, OnInit } from '@angular/core';

import { PlayersApiService } from '../../../../core/services/players/players-api.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.scss'
})
export class PlayerDetailComponent implements OnInit {
  player: any;
  id: string = "";

  constructor(
    private router: Router,
    private playersApi: PlayersApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';

    this.playersApi.getPlayer(this.id).subscribe({
      next: (data) => {
        if (data) {
          this.player = data;
        } else {
          this.router.navigate(['/players']);
        }
      },
      error: (err) => {
        console.error('Error obteniendo jugador:', err);
        this.router.navigate(['/players']);
      }
    });
  }
  
}
