import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DiceService {
    rollDice(numberOfDice: number): number {
        return Array(numberOfDice)
            .fill(0)
            .reduce(() => this.randomDice() + this.randomDice(), 0);
    }

    private randomDice(): number {
        return Math.floor(Math.random() * 6) + 1; // Dé à 6 faces
    }
}