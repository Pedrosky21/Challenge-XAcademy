import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').
    then(m => m.HomeModule)
  },
  {
    path:'players',
    loadChildren: () => import('./features/players/players.module').
    then(m=>m.PlayersModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./features/auth/auth.module').
    then(m=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
