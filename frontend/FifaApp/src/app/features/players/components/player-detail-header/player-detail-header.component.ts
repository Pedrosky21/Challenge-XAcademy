import { Component } from '@angular/core';

import { Input } from '@angular/core';

import { ChartConfiguration, ChartType } from 'chart.js';

import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player-detail-header',
  templateUrl: './player-detail-header.component.html',
  styleUrl: './player-detail-header.component.scss',
})
export class PlayerDetailHeaderComponent {
  @Input() player: any;

  public chartType: 'radar' = 'radar';

  public chartData: ChartConfiguration<'radar'>['data'] = {
    labels: ['Pace', 'Shooting', 'Passing', 'Defending', 'Dribbling', 'Physic'],
    datasets: [
      {
        data: [],
        label: 'Player Stats',
      },
    ],
  };

  public chartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
        stepSize: 25
      }
      },
      
    },
    animation: {
      duration: 1000, // duración en ms
      easing: 'easeOutBounce',
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['player'] && this.player) {
      this.chartData.datasets[0].data = [
        this.player.pace,
        this.player.shooting,
        this.player.passing,
        this.player.defending,
        this.player.dribbling,
        this.player.physic,
      ];
    }
  }
}
