import { CAMPFIRE_DECK, TRAP_DECK, TREASURE_DECK, OBJECT_DECK, SHOP_DECK, TOMB_DECK, SANCTUARY_DECK, REWARD_DECK } from "../deck.constants";
import { pickMonster, pickGuardian, pickBoss } from "./monsters.utils";

export function pickFrom(deck: any[]) {
    return deck[Math.floor(Math.random() * deck.length)]
}

export function rollDice(nbSides: number): number {
    return Math.floor(Math.random() * nbSides) + 1;
}

export function pickRoom(nbPlayers: number, floor: number) {
    switch (rollDice(8)) {
        case 1: { return { key: 'Trap', value: pickTrap() }; }
        case 2: { return { key: 'Tomb', value: pickTomb() }; }
        case 3: { return { key: 'Campfire', value: pickCampfire() }; }
        case 4: { return { key: 'Shop', value: pickShop() } }
        case 5: { return { key: 'Treasure', value: pickTreasure() } }
        case 6: { return { key: 'Sanctuary', value: pickSanctuary() } }
        case 7: { return { key: 'Monster', value: pickMonster(floor, nbPlayers) } }
        case 8: { return { key: 'Object', value: pickObject() } }
        default: {
            console.error('valeur inconnue')
            return null;
        }
    }
}

export function pickExit(type: string) {
    switch (type) {
        case 'Exploration': { return { key: 'EXIT', value: pickDoor() }; }
        case 'Guardian': { return { key: 'Guardian', value: pickGuardian(0, 1) }; }
        case 'Boss': { return { key: 'Boss', value: pickBoss(0, 1) }; }
        default: {
            console.error('valeur inconnue')
            return null;
        }
    }
}

function pickDoor() {
    return { label: 'Descente', effects: '-1 FOOD && RESET' };
}

function pickCampfire() {
    return pickFrom(CAMPFIRE_DECK)
}

function pickTrap() {
    return pickFrom(TRAP_DECK)
}

function pickTreasure() {
    return pickFrom(TREASURE_DECK)
}

function pickObject() {
    return pickFrom(OBJECT_DECK)
}

function pickShop() {
    return pickFrom(SHOP_DECK)
}

function pickTomb() {
    return pickFrom(TOMB_DECK)
}

function pickSanctuary() {
    return pickFrom(SANCTUARY_DECK)
}

function pickReward() {
    return pickFrom(REWARD_DECK)
}
