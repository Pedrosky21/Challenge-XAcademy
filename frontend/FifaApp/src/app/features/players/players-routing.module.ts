import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { EditPlayerComponent } from './pages/edit-player/edit-player.component';

const routes: Routes = [
  {path: '', component: PlayersPageComponent},
  {path: 'detail/:id', component: PlayerDetailComponent},
  {path: 'edit-player/:id', component: EditPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
