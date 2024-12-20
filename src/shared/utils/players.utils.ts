import { pickFrom } from "./picker.utils";

const CHARACTER_DECK = [
    {
        name: 'Croisé',
        xp: 0,
        armor: 1,
        life: 10,
        food: 4,
        gold: 0,
        potion: null,
        spell: null,
        skills: [
            { label: 'ASSOMER', type: 'Combat', description: 'Ajouter le double de la valeur de votre armure aux dégats de votre attaque' },
            { label: 'BOUCLIER', type: 'Exploration', description: 'Augmenter l\'armure de tous les personnages de 1 pour la prochaine salle' },
        ],
        effects: []
    },
    {
        name: 'Prétresse',
        xp: 0,
        armor: 0,
        life: 13,
        food: 3,
        gold: 2,
        potion: 'EAU BENITE',
        spell: null,
        skills: [
            { label: 'TRIBUT DIVIN', type: 'Combat', description: 'Sacrifiez un nombre de points de vie, votre adversaire en perdra le double' },
            { label: 'BENEDICTION', type: 'Exploration', description: 'Annulez la mort d\'un personnage. Soignez le de 2 points de vie' },
        ],
        effects: []
    },
    {
        name: 'Mage',
        xp: 0,
        armor: 0,
        life: 11,
        food: 4,
        gold: 3,
        potion: null,
        spell: null,
        skills: [
            { label: 'CONJURATION', type: 'Combat', description: 'Appliquez l\'effet d\'une potion de feu, de givre ou de poison. Vous n\'avez pas besoin de la posséder' },
            { label: 'CLAIRVOYANCE', type: 'Exploration', description: 'Révèlez jusqu\'a 3 salles' },
        ],
        effects: []
    },
    {
        name: 'Rogue',
        xp: 0,
        armor: 0,
        life: 10,
        food: 3,
        gold: 5,
        potion: null,
        spell: null,
        skills: [
            { label: 'COUP EN TRAITRE', type: 'Combat', description: 'Doublez les dégats infligés par un des dés de votre attaque' },
            { label: 'EVASION', type: 'Exploration', description: 'Sautez la prochaine salle' },
        ],
        effects: []
    },
];

export function createPlayers(nbPlayers: number) {
    let players = [];
    for (let i = 0; i < nbPlayers; i++) {
        players.push({ id: i, name: '', position: { x: 0, y: 0 }, attributes: pickFrom(CHARACTER_DECK) })
    }
    return players;
}

