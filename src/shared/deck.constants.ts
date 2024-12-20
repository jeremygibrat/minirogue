import { HealthEffect, TargetType } from "./models/card-effects"


export const CAMPFIRE_DECK = [
    {
        type: 'CAMPFIRE',
        label: 'Ermite',
        actions: [
            { label: 'Aider', actions: '-1 XP && +3 GOLD', effects: [new HealthEffect(-3, { type: TargetType.SELF })] },
            { label: 'Partager un repas', actions: '-1 FOOD && -3 LIFE', effects: [new HealthEffect(-3, { type: TargetType.SELF })] },
            { label: 'Tunnel', actions: 'Echanger 2 cartes' },
        ]
    },
    {
        type: 'CAMPFIRE',
        label: 'Campfire',
        actions: [
            { label: 'Aiguiser l\'arme', actions: '+1 XP' },
            { label: 'Chasser', actions: '+1 FOOD' },
            { label: 'Soigner', actions: '+2 LIFE' },
        ]
    },
]

export const TRAP_DECK = [
    {
        type: 'TRAP',
        actions: [
            { label: 'Méandres', fail: '', success: '+2 GOLD' },
            { label: 'Dédale', fail: '-1 XP', success: '+3 GOLD' },
            { label: 'Labyrinthe', fail: '-2 XP', success: '+4 GOLD' },
        ]
    },
    {
        type: 'TRAP',
        actions: [
            { label: 'Infimes épines', fail: '-1 LIFE / FLOOR', success: '+1 POTION POISON' },
            { label: 'Toile épaisse', fail: '-1 ARMOR && -1 POTION PERCEPTION', success: '+2 FOOD' },
            { label: 'Chauve-souris', fail: '-1 FOOD && -1 POTION PERCEPTION', success: '+2 XP' },
        ]
    },
    {
        type: 'TRAP',
        actions: [
            { label: 'Horde de rats', fail: '-1 FOOD / FLOOR', success: '+1 POTION EAU BENITE' },
            { label: 'Brume acide', fail: '-1 ARMOR', success: '+1 ARMOR' },
            { label: 'Pendules', fail: '-1 LIFE / FLOOR && POISON', success: '+1 POTION PERCEPTION' },
        ]
    },
    {
        type: 'TRAP',
        actions: [
            { label: 'Pics vénéreux', fail: '-1 LIFE & POISON', success: '+1 XP' },
            { label: 'Plancher piégé', fail: '-1 LIFE / FLOOR', success: '+2 XP' },
            { label: 'Trou béant', fail: '-3 LIFE & FALL', success: '+1 Potion perception' },
        ]
    },
]

export const TREASURE_DECK = [
    {
        type: 'TREASURE',
        label: '+1 GOLD || 2 GHOST -> +3 GOLD',
        actions: [
            '+1 GOLD',
            '+2 GOLD',
            '+5 LIFE',
            '+1 POTION',
            'GHOST -> +2 GOLD',
            'GHOST -> +1 ARMOR',
        ]
    },
    {
        type: 'TREASURE',
        label: '+1 GOLD || 2 GHOST -> +2 GOLD',
        actions: [
            '+1 ARMOR || +2 XP',
            '+1 ARMOR || +1 GOLD',
            '+1 POTION FIRE || +2 GOLD',
            '+1 POTION POISON || +1 POTION PERCEPTION',
            '+1 POTION LIFE || +2 XP',
            '+1 POTION ICE || +1 POTION PERCEPTION',
        ]
    },
]

export const OBJECT_DECK = [
    { type: 'OBJECT', label: 'Dague rouillée', effect: '+1 PROUESSE' },
    { type: 'OBJECT', label: 'Dague rouillée', effect: '+1 PROUESSE' },
    { type: 'OBJECT', label: 'Dague rouillée', effect: '+1 PROUESSE' },
    { type: 'OBJECT', label: 'Epée usée', effect: '+2 PROUESSE' },
    { type: 'OBJECT', label: 'Epée usée', effect: '+2 PROUESSE' },
    { type: 'OBJECT', label: 'Super hache', effect: '+3 PROUESSE' },
    { type: 'OBJECT', label: 'Courant d\'air (Exploration)', effect: 'Remplacer une salle doivée mais non visitée par une salle non utilisée tirée aléatoirement' },
    { type: 'OBJECT', label: 'Survol (Préparation)', effect: 'Après avoir mélangé les salles, piochez les 2 premiers et placez les où vous le souhaitez dans le paquet de salles' },
]

export const SHOP_DECK = [
    {
        type: 'SHOP',
        label: 'Hunter',
        shop:
            [
                'FLOOR GOLD -> +1 FOOD',
                '2 GOLD -> +1 POTION EAU BENITE',
                '3 GOLD -> +4 LIFE',
                '5 GOLD -> +1 POTION',
            ],
        buy: [
            '1 ARMOR -> +4 GOLD',
            '1 POTION -> +2 GOLD',
        ]
    },
    {
        type: 'SHOP',
        label: 'Seller',
        shop:
            [
                '1 GOLD -> +1 LIFE',
                '2 GOLD -> +1 POTION EAU BENITE',
                '3 GOLD -> +4 LIFE',
                '5 GOLD -> +1 ARMOR',
                '5 GOLD -> +1 POTION',
            ],
        buy: [
            '1 ARMOR -> +3 GOLD',
            '1 POTION -> +3 GOLD',
        ]
    },
]

export const TOMB_DECK = [
    {
        type: 'TOMB',
        label: 'Sépulture',
        actions: [
            { label: 'Eau bénite', reward: '+1 POTION EAU BENITE' },
            { label: 'Vivres', reward: '+1 FOOD' },
            { label: 'Butin', reward: '+1 GOLD' },
            { label: 'Codex', reward: '+1 XP' },
            { label: 'Rats', reward: '-1 FOOD' },
            { label: 'Ghost', reward: 'GHOST' },
        ]
    },
    {
        type: 'TOMB',
        label: 'Caverne humide',
        actions: [
            { label: 'Hallucinogène', reward: 'GHOST' },
            { label: 'Marron', reward: '+1 FOOD' },
            { label: 'Gris', reward: '+1 FOOD' },
            { label: 'Beige', reward: '-1 FOOD' },
            { label: 'Luminescent', reward: '+2 XP' },
            { label: 'A pois', reward: 'POISON' },
        ]
    },
    {
        type: 'TOMB',
        label: 'Corridor',
        actions: [
            { label: 'Rien ne se passe', reward: null },
            { label: 'Rien ne se passe', reward: null },
            { label: 'C\'est comestible, ça ?', reward: '+1 FOOD' },
            { label: 'C\'est comestible, ça ?', reward: '+1 FOOD' },
            { label: 'Plancher véreux', reward: 'FALL && -2 LIFE' },
            { label: 'Embuscade', reward: 'GHOST' },
        ]
    },
    {
        type: 'TOMB',
        label: 'Abri abandonné',
        actions: [
            { label: 'Abri d\'un combattant', reward: '+1 POTION FIRE || +1 POTION POISON || +2 XP' },
            { label: 'Abri d\'un combattant', reward: '+1 POTION FIRE || +1 POTION POISON || +2 XP' },
            { label: 'Piège d\'un magicien', reward: '-1 XP' },
            { label: 'Abri d\'un clerc', reward: '+1 POTION EAU BENITE || +1 POTION SOIN' },
            { label: 'Piège d\'un rogue', reward: '-3 LIFE' },
            { label: 'Fantome d\'un aventurier', reward: 'GHOST' },
        ]
    },
]

export const SANCTUARY_DECK = [
    {
        type: 'SANCTUARY',
        label: 'Sanctuaire',
        actions: [
            { label: 'Honni soyez-vous !', reward: 'POISON && MALEDICTION' },
            { label: 'Soyez maudit !', reward: 'MALEDICTION' },
            { label: 'Soyez maudit !', reward: 'MALEDICTION' },
            { label: 'Esprit malsain', reward: '+2 LIFE && +1 BENEDICTION' },
            { label: 'Un coeur somble', reward: '+1 LIFE && +1 BENEDICTION' },
            { label: 'Foi fragile', reward: '1 LIFE' },
        ]
    },
]

export const REWARD_DECK = [
    { type: 'REWARD', label: '+2 GOLD && +1 POTION FIRE || +2 XP ' },
    { type: 'REWARD', label: '+2 GOLD && +1 POTION ICE || +2 GOLD' },
    { type: 'REWARD', label: '+2 GOLD && +1 POTION POISON || +2 XP' },
    { type: 'REWARD', label: '+2 GOLD && +1 POTION LIFE || +1 ARMOR' },
    { type: 'REWARD', label: '+2 GOLD && +1 POTION EAU BENITE || +2 GOLD' },
    { type: 'REWARD', label: '+2 GOLD && +1 POTION PERCEPTION || +1 ARMOR' },
]