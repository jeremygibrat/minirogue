// models/map.model.ts
export interface MapCell {
    x: number;
    y: number;
    type: 'empty' | 'wall' | 'treasure' | 'enemy';
}

export interface PlayerPosition {
    x: number;
    y: number;
}

// services/map.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MapService {
    private mapSize = 3;
    private mapSubject: BehaviorSubject<MapCell[][]>;
    private playerPositionSubject: BehaviorSubject<PlayerPosition>;

    constructor() {
        // Initialisation de la carte
        const initialMap = this.generateMap();
        this.mapSubject = new BehaviorSubject<MapCell[][]>(initialMap);

        // Position initiale du joueur
        this.playerPositionSubject = new BehaviorSubject<PlayerPosition>({ x: 0, y: 0 });
    }

    // Génération de la carte
    private generateMap(): MapCell[][] {
        const map: MapCell[][] = [];

        for (let y = 0; y < this.mapSize; y++) {
            map[y] = [];
            for (let x = 0; x < this.mapSize; x++) {
                map[y][x] = {
                    x,
                    y,
                    type: this.randomCellType()
                };
            }
        }

        // S'assurer que la case centrale reste vide (position du joueur)
        map[1][1].type = 'empty';

        return map;
    }

    // Génération aléatoire du type de cellule
    private randomCellType(): MapCell['type'] {
        const types: MapCell['type'][] = ['empty', 'empty', 'empty', 'wall', 'treasure', 'enemy'];
        return types[Math.floor(Math.random() * types.length)];
    }

    // Observables pour la carte et la position du joueur
    getMap$(): Observable<MapCell[][]> {
        return this.mapSubject.asObservable();
    }

    getPlayerPosition$(): Observable<PlayerPosition> {
        return this.playerPositionSubject.asObservable();
    }

    // Vérification de la validité du déplacement
    private isValidMove(x: number, y: number): boolean {
        const map = this.mapSubject.value;
        return (
            x >= 0 && x < this.mapSize &&
            y >= 0 && y < this.mapSize &&
            map[y][x].type !== 'wall'
        );
    }

    // Méthodes de déplacement
    movePlayer(direction: 'up' | 'down' | 'left' | 'right') {
        const currentPosition = this.playerPositionSubject.value;
        let newX = currentPosition.x;
        let newY = currentPosition.y;

        switch (direction) {
            case 'up': newY--; break;
            case 'down': newY++; break;
            case 'left': newX--; break;
            case 'right': newX++; break;
        }

        if (this.isValidMove(newX, newY)) {
            const newPosition = { x: newX, y: newY };
            this.playerPositionSubject.next(newPosition);
            this.checkCellInteraction(newPosition);
        }
    }

    // Interaction avec les cellules
    private checkCellInteraction(position: PlayerPosition) {
        const map = this.mapSubject.value;
        const cell = map[position.y][position.x];

        switch (cell.type) {
            case 'treasure':
                console.log('Vous avez trouvé un trésor !');
                cell.type = 'empty';
                break;
            case 'enemy':
                console.log('Vous rencontrez un ennemi !');
                // Logique de combat potentielle
                break;
        }
    }
}