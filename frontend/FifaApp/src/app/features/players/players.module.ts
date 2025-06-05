import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { SharedModule } from '../../shared/shared.module';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { PlayerDetailHeaderComponent } from './components/player-detail-header/player-detail-header.component';
import { NgChartsModule } from 'ng2-charts';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { EditPlayerComponent } from './pages/edit-player/edit-player.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    PlayersPageComponent,
    PlayerCardComponent,
    PlayerDetailComponent,
    PlayerDetailHeaderComponent,
    SearchFormComponent,
    EditPlayerComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    SharedModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PlayersModule { }
