export function pickGuardian(floor: number, nbPlayer: number) {
    let lifeBonus = 0;
    let attackBonus = 1;
    if (floor == 1) {
        lifeBonus = 4
        attackBonus = 3
    }
    if (floor == 2) {
        lifeBonus = 8
        attackBonus = 5
    }

    let cards = [
        {
            label: 'Le dragon maudit',
            life: (12 + lifeBonus) * nbPlayer,
            attack: 1 + attackBonus,
            effect: 'MALEDICTION',
            reward: '+' + 1 * (floor + 1) + 'XP && +1 REWARD'
        },
        {
            label: 'Le protecteur du roi',
            life: (12 + lifeBonus) * nbPlayer,
            attack: 1 + attackBonus,
            effect: 'UNSTOPPABLE',
            reward: '+' + 1 * (floor + 1) + 'XP && +1 REWARD'
        },
        {
            label: 'L\'araignée',
            life: (12 + lifeBonus) * nbPlayer,
            attack: 1 + attackBonus,
            effect: 'POISON',
            reward: '+' + 1 * (floor + 1) + 'XP && +1 REWARD'
        },
        {
            label: 'La goule',
            life: (15 + lifeBonus) * nbPlayer,
            attack: attackBonus,
            effect: 'AFFAIBLISSEMENT & UNSTOPPABLE',
            reward: '+' + 2 * (floor + 1) + 'XP && +1 REWARD'
        },
    ]
    return cards[Math.floor(Math.random() * cards.length)]
}

export function pickBoss(phase: number, nbPlayer: number) {
    let cards = [
        {
            label: 'Les restes d\'Og',
            life: 25 * nbPlayer,
            attack: 8,
            effect: 'MALEDICTION',
            reward: null
        },
        {
            label: 'Les restes d\'Og',
            life: 20 * nbPlayer,
            attack: 9,
            effect: 'POISON',
            reward: null
        },
    ]
    return cards[phase];
}

export function pickGhost(floor: number, nbPlayer: number) {
    let cards = [
        {
            label: 'Apparition',
            life: 10 * nbPlayer,
            attack: 1,
            effect: null,
            reward: '+2 XP'
        },
        {
            label: 'Fantome',
            life: 12 * nbPlayer,
            attack: 2,
            effect: 'AFFAIBLISSEMENT',
            reward: '+2 XP'
        },
        {
            label: 'Spectre',
            life: 14 * nbPlayer,
            attack: 2,
            effect: 'AVEUGLEMENT',
            reward: '+3 XP'
        },
        {
            label: 'Revenant',
            life: 16 * nbPlayer,
            attack: 2,
            effect: 'UNSTOPPABLE',
            reward: '+3 XP'
        },
    ]
    return cards[floor]
}

export function pickMonster(floor: number, nbPlayer: number) {
    let cards: any[] = []
    switch (floor) {
        case 0: {
            cards = [
                {
                    label: 'Araignée géante',
                    life: 6 * nbPlayer,
                    attack: 2,
                    effect: null,
                    reward: '+1 XP'
                },
                {
                    label: 'Rat géant',
                    life: 6 * nbPlayer,
                    attack: 2,
                    effect: null,
                    reward: '+1 XP'
                },
                {
                    label: 'Mouche mutante',
                    life: 4 * nbPlayer,
                    attack: 2,
                    effect: 'UNSTOPPABLE',
                    reward: '+2 GOLD'
                }
            ]
            break;
        }
        case 1: {
            cards = [
                {
                    label: 'Gobelin',
                    life: 9 * nbPlayer,
                    attack: 4,
                    effect: null,
                    reward: '+2 XP'
                },
                {
                    label: 'Soldat squelette',
                    life: 9 * nbPlayer,
                    attack: 4,
                    effect: null,
                    reward: '+2 XP'
                },
                {
                    label: 'Ver fouisseur',
                    life: 6 * nbPlayer,
                    attack: 2,
                    effect: 'FALL',
                    reward: '+2 XP'
                },
            ]
            break;
        }
        case 2: {
            cards = [
                {
                    label: 'Arbalétrier',
                    life: 12 * nbPlayer,
                    attack: 6,
                    effect: 'POISON',
                    reward: '+2 XP'
                },
                {
                    label: 'Serpent ailé',
                    life: 12 * nbPlayer,
                    attack: 6,
                    effect: 'MALEDICTION',
                    reward: '+2 XP'
                },
                {
                    label: 'Loup terrible',
                    life: 8 * nbPlayer,
                    attack: 5,
                    effect: 'UNSTOPPABLE',
                    reward: '+1 FOOD'
                }
            ]
            break;
        }
        case 3: {
            cards = [
                {
                    label: 'Garde du roi',
                    life: 15 * nbPlayer,
                    attack: 8,
                    effect: 'POISON',
                    reward: '+3 XP'
                },
                {
                    label: 'Garde maudit',
                    life: 15 * nbPlayer,
                    attack: 8,
                    effect: 'MALEDICTION',
                    reward: '+3 XP'
                },
                {
                    label: 'Esprit ancestral',
                    life: 10 * nbPlayer,
                    attack: 5,
                    effect: 'AFFAIBLISSEMENT',
                    reward: '+3 GOLD'
                },
            ]
            break;
        }
    }

    return cards[Math.floor(Math.random() * cards.length)]
}