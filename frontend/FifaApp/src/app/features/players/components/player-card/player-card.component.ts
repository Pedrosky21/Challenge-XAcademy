import { Component } from '@angular/core';

import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss'
})
export class PlayerCardComponent {
  @Input() player: any;

  constructor(
    private router: Router
  ) {}

  onClick() {
    this.router.navigate(['/players/detail/' + this.player.id]);
  }
}
