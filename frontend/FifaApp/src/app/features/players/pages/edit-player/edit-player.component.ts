import { Component, OnInit } from '@angular/core';

import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { PlayersApiService } from '../../../../core/services/players/players-api.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.scss',
})
export class EditPlayerComponent implements OnInit {
  player: any = {
    long_name: '',
    club_name: '',
    player_positions: '',
    nationality_name: '',
    pace: 0,
    passing: 0,
    shooting: 0,
    defending: 0,
    dribbling: 0,
    physic: 0,
    overall: 0,
  };
  id: string = '';

  form: UntypedFormGroup;
  long_name_Ctrl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  club_name_Ctrl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  nationality_name_Ctrl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  player_positions_Ctrl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  pace_Ctrl = new UntypedFormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(100),
  ]);
  passing_Ctrl = new UntypedFormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(100),
  ]);
  shooting_Ctrl = new UntypedFormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(100),
  ]);
  defending_Ctrl = new UntypedFormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(100),
  ]);
  dribbling_Ctrl = new UntypedFormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(100),
  ]);
  physic_Ctrl = new UntypedFormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(100),
  ]);
  overall_Ctrl = new UntypedFormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(100),
  ]);

  constructor(
    private uFormBuilder: UntypedFormBuilder,
    private router: Router,
    private playersApi: PlayersApiService,
    private route: ActivatedRoute
  ) {
    this.form = this.uFormBuilder.group({
      long_name: this.long_name_Ctrl,
      club_name: this.club_name_Ctrl,
      player_positions: this.player_positions_Ctrl,
      nationality_name: this.nationality_name_Ctrl,
      pace: this.pace_Ctrl,
      passing: this.passing_Ctrl,
      shooting: this.shooting_Ctrl,
      defending: this.defending_Ctrl,
      dribbling: this.dribbling_Ctrl,
      physic: this.physic_Ctrl,
      overall: this.overall_Ctrl,
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';

    if (this.id !== '0') {
      this.loadPlayerData(this.player);
    }
  }

  loadPlayerData(player: any) {
    this.playersApi.getPlayer(this.id).subscribe({
      next: (data) => {
        if (data) {
          this.player = data;
          this.form.patchValue(this.player);
        } else {
          this.router.navigate(['/players']);
        }
      },
      error: (err) => {
        console.error('Error obteniendo jugador:', err);
        this.router.navigate(['/players']);
      },
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.sendPlayerData(this.form.getRawValue());
    }
  }

  sendPlayerData(playerData: any) {
    // If id != 0, update the player
    if (this.id !== '0') {
      this.playersApi.updatePlayer(this.id, playerData).subscribe({
        next: (data) => {
          console.log('Jugador actualizado:', data);
          this.router.navigate(['/players']);
        },
        error: (err) => {
          console.error('Error actualizando jugador:', err);
        },
      });
      
    } else if (this.id === '0') {
      // If id == 0, create a new player
      this.playersApi.createPlayer(playerData).subscribe({
        next: (data) => {
          console.log('Jugador creado:', data);
          this.router.navigate(['/players']);
        },
        error: (err) => {
          console.error('Error creando jugador:', err);
        },
      });
    }
  }
}
