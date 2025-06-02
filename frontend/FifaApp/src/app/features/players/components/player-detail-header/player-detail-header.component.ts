import { Component } from '@angular/core';

import { Input } from '@angular/core';

@Component({
  selector: 'app-player-detail-header',
  templateUrl: './player-detail-header.component.html',
  styleUrl: './player-detail-header.component.scss'
})
export class PlayerDetailHeaderComponent {
  @Input() player: any;

}
