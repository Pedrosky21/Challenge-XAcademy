import { Component } from '@angular/core';

import { DataTransferService } from '../../../../core/services/data-player/data-transfer.service';

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
    private router: Router,
    private dataTransferService: DataTransferService
  ) {}

  onClick() {
    this.dataTransferService.setData(this.player);
    console.log(this.player);
    this.router.navigate(['/players/detail']);
  }
}
