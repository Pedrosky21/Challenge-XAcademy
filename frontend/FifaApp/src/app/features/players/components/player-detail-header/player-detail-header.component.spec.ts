import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailHeaderComponent } from './player-detail-header.component';

describe('PlayerDetailHeaderComponent', () => {
  let component: PlayerDetailHeaderComponent;
  let fixture: ComponentFixture<PlayerDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerDetailHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
