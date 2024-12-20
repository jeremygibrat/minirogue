export interface Player {
    xp: number;
    armor: number;
    life: number;
    food: number;
    gold: number;
    potion: Potion,
    spells: Spell,
}

export interface Character {
    name: string;
    maxHealth: number;
    currentHealth: number;
    attackDice: number;
    defenseDice: number;
}

export interface Potion { }
export interface Spell { }