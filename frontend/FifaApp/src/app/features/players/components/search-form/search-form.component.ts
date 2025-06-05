import { Component } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {
  @Output() searchSubmit = new EventEmitter<any>();

  formData = {
    long_name: '',
    player_positions: '',
    club_name: '',
    nationality_name: '',
  }

  onSubmit() {
    this.searchSubmit.emit(this.formData);
  }
}
