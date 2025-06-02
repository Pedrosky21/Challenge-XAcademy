import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';

const routes: Routes = [
  {path: '', component: PlayersPageComponent},
  {path: 'detail', component: PlayerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
