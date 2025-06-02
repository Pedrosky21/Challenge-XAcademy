import { Component, OnInit } from '@angular/core';

import { DataTransferService } from '../../../../core/services/data-player/data-transfer.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.scss'
})
export class PlayerDetailComponent implements OnInit {
  player: any;

  constructor(
    private router: Router,
    private dataService: DataTransferService
  ) {}

  ngOnInit() {
    this.player = this.dataService.getData();

    if (!this.player) {
      this.router.navigate(['/players']);
    }
  }
  
}
