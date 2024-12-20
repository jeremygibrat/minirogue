// services/combat.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { DiceService } from './dice.service';

export interface CombatLog {
    message: string;
    type: 'attack' | 'defense' | 'damage' | 'result';
}

@Injectable({
    providedIn: 'root'
})
export class CombatService {
    private combatLogsSubject = new BehaviorSubject<CombatLog[]>([]);
    combatLogs$: Observable<CombatLog[]> = this.combatLogsSubject.asObservable();

    constructor(private diceService: DiceService) { }

    fight(player: Character, monster: Character): { winner: Character, loser: Character } {
        this.resetCombatLogs();
        this.addCombatLog({ message: '🔮 Début du combat !', type: 'result' });

        while (this.isCharacterAlive(player) && this.isCharacterAlive(monster)) {
            // Tour du joueur
            this.simulateTurn(player, monster, 'player');
            if (!this.isCharacterAlive(monster)) break;

            // Tour du monstre
            this.simulateTurn(monster, player, 'monster');
        }

        const winner = this.isCharacterAlive(player) ? player : monster;
        const loser = this.isCharacterAlive(player) ? monster : player;

        this.addCombatLog({
            message: winner === player
                ? '🏆 Le joueur remporte le combat !'
                : '💀 Le monstre remporte le combat !',
            type: 'result'
        });

        return { winner, loser };
    }

    private simulateTurn(attacker: Character, defender: Character, attackerType: 'player' | 'monster') {
        const attackRoll = this.diceService.rollDice(attacker.attackDice);
        const defenseRoll = this.diceService.rollDice(defender.defenseDice);
        const damage = Math.max(attackRoll - defenseRoll, 0);

        this.addCombatLog({
            message: `${attacker.name} attaque avec un lancé de ${attackRoll}`,
            type: 'attack'
        });
        this.addCombatLog({
            message: `${defender.name} se défend avec un lancé de ${defenseRoll}`,
            type: 'defense'
        });

        if (damage > 0) {
            defender.currentHealth = Math.max(defender.currentHealth - damage, 0);
            this.addCombatLog({
                message: `${attacker.name} inflige ${damage} points de dégâts !`,
                type: 'damage'
            });
        } else {
            this.addCombatLog({
                message: `${defender.name} bloque complètement l'attaque !`,
                type: 'defense'
            });
        }
    }

    private isCharacterAlive(character: Character): boolean {
        return character.currentHealth > 0;
    }

    private resetCombatLogs() {
        this.combatLogsSubject.next([]);
    }

    private addCombatLog(log: CombatLog) {
        const currentLogs = this.combatLogsSubject.value;
        this.combatLogsSubject.next([...currentLogs, log]);
    }
}
