import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../shared/models/character.model';
import { CombatLog, CombatService } from '../../shared/services/combat.service';

@Component({
  selector: 'app-combat',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './combat.component.html',
  styleUrl: './combat.component.scss'
})
export class CombatComponent implements OnInit, OnChanges {
  player: Character;
  monster: Character;
  combatLogs$: Observable<CombatLog[]>;

  @Input() hero: any;
  @Input() enemy: any;

  constructor(private combatService: CombatService) {
    this.player = {
      name: 'Héros',
      maxHealth: 20,
      currentHealth: 20,
      attackDice: 3,
      defenseDice: 2
    };

    this.monster = {
      name: 'Dragon',
      maxHealth: 25,
      currentHealth: 25,
      attackDice: 2,
      defenseDice: 3
    };

    this.combatLogs$ = this.combatService.combatLogs$;
  }

  ngOnChanges(changes: any): void {
    console.log(changes)
    const player = changes?.hero?.currentValue;
    if (player) {
      this.player.name = player.attributes.name;
    }
    const enemy = changes?.enemy?.currentValue;
    if (enemy) {
      this.monster.name = enemy.label;
      this.monster.currentHealth = enemy.life;
      this.monster.maxHealth = enemy.life;
    }

  }

  ngOnInit() { }

  startCombat() {
    // Réinitialiser les points de vie avant chaque combat
    this.player.currentHealth = this.player.maxHealth;
    this.monster.currentHealth = this.monster.maxHealth;

    const result = this.combatService.fight(this.player, this.monster);
    console.log('Résultat du combat:', result);
  }
}
