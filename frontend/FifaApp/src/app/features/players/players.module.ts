import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { SharedModule } from '../../shared/shared.module';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { PlayerDetailHeaderComponent } from './components/player-detail-header/player-detail-header.component';


@NgModule({
  declarations: [
    PlayersPageComponent,
    PlayerCardComponent,
    PlayerDetailComponent,
    PlayerDetailHeaderComponent,
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    SharedModule
  ]
})
export class PlayersModule { }
