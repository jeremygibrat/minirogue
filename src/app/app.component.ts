import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { updateAttribute } from '../shared/utils/characters.utils';
import { createMapFloors } from '../shared/utils/level.utils';
import { createPlayers } from '../shared/utils/players.utils';
import { CombatComponent } from './combat/combat.component';
import { GameMapComponent } from './map/game-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, JsonPipe, UpperCasePipe, CombatComponent, GameMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'pilgrimage';
  gameConfig = {
    nbPlayers: 1,
    maxPlayers: 2,
    maxXp: 23,
    maxArmor: 4,
    maxLife: 20,
    maxFood: 4,
    maxGold: 10,
    maxSpell: 1,
    maxPotion: 1,
  };

  gameInstance = {
    players: createPlayers(this.getNbPlayers()),
    world: createMapFloors(this.getNbPlayers()),
    currentTurn: {
      level: 0,
      floor: 0,
      room: 0,
      playerId: 0
    },
    combat: {
      isFighting: false,
      player: null,
      monster: null
    },
    isGameStarted: false,
  }

  ngOnInit(): void {
    console.log(this.gameInstance)
  }

  resolveAction(card: any) {
    if (Object.hasOwn(card, 'actions')) {
      console.log(card.actions[Math.floor(Math.random() * card.actions.length)])
    }
  }

  startFight(player: any, cell: any) {
    this.gameInstance.combat.isFighting = true;
    this.gameInstance.combat.player = player;
    this.gameInstance.combat.monster = cell.value;
  }


  /**
   * Players
   */
  getNbPlayers() {
    return this.gameConfig.nbPlayers;
  }

  getPlayerRoom() {
    const coord = this.gameInstance.players[0].position;
    console.log(this.gameInstance.world[this.gameInstance.currentTurn.level].rooms[this.gameInstance.currentTurn.floor][coord.y][coord.x])
  }

  getPlayerAtCell(idx: number, idy: number) {
    return this.gameInstance.players.filter(p => p.position.x === idx && p.position.y === idy);
  }

  addXp(player: any, quantity: number) {
    player.attributes.xp = updateAttribute(player.attributes.xp, this.gameConfig.maxXp, quantity);
  }

  addArmor(player: any, quantity: number) {
    player.attributes.armor = updateAttribute(player.attributes.armor, this.gameConfig.maxArmor, quantity);
  }

  addLife(player: any, quantity: number) {
    player.attributes.life = updateAttribute(player.attributes.life, this.gameConfig.maxLife, quantity);
  }

  addFood(player: any, quantity: number) {
    player.attributes.food = updateAttribute(player.attributes.food, this.gameConfig.maxFood, quantity);
  }

  addGold(player: any, quantity: number) {
    player.attributes.gold = updateAttribute(player.attributes.gold, this.gameConfig.maxGold, quantity);
  }


  /**
   * Navigation
   */
  navigate(player: any, direction?: string) {
    if (player.position.x != 2 || player.position.y != 2) {
      this.goToNextRoom(player, direction)
    } else if ((player.position.x == 2 || player.position.y == 2) && !this.isFloorComplete()) {
      this.goToNextFloor()
    } else if (this.isFloorComplete()) {
      this.goToNextLevel()
    } else {
      console.log('the end!')
    }
  }

  isFloorComplete() {
    const nbFloors = this.gameInstance.world[this.gameInstance.currentTurn.level].rooms.length
    return nbFloors === this.gameInstance.currentTurn.floor + 1
  }

  goToNextRoom(player: any, direction?: string) {
    switch (direction) {
      case 'bottom': {
        this.gameInstance.players.forEach(p => {
          if (p.id === player.id) {
            p.position.y = p.position.y + 1
          }
        });
        break;
      }
      case 'right': {
        this.gameInstance.players.forEach(p => {
          if (p.id === player.id) {
            p.position.x = p.position.x + 1
          }
        });
        break;
      }
    }
    console.log(this.gameInstance)
  }

  goToNextFloor() {
    this.gameInstance.currentTurn.floor++
    this.gameInstance.players.forEach(p => {
      p.position.x = 0
      p.position.y = 0
    })
    this.setPlayersAtStart()
  }

  goToNextLevel() {
    this.gameInstance.currentTurn.level++
    this.gameInstance.currentTurn.floor = 0;
    this.setPlayersAtStart()
  }

  setPlayersAtStart() {
    this.gameInstance.players.forEach(p => {
      p.position.x = 0
      p.position.y = 0
    })
  }
}
