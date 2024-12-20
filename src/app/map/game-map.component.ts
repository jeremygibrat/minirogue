// components/game-map.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MapCell, PlayerPosition, MapService } from '../../shared/services/map.service';

@Component({
    selector: 'app-game-map',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './game-map.component.html',
    styleUrl: './game-map.component.scss'
})
export class GameMapComponent implements OnInit {
    map$: Observable<MapCell[][]>;
    playerPosition: PlayerPosition = { x: 1, y: 1 };

    constructor(private mapService: MapService) {
        // Combinaison des observables de la carte et de la position du joueur
        this.map$ = this.mapService.getMap$();
        this.mapService.getPlayerPosition$().subscribe(
            position => this.playerPosition = position
        );
    }

    ngOnInit() {
        // Écoute des événements clavier pour le déplacement
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp': this.movePlayer('up'); break;
                case 'ArrowDown': this.movePlayer('down'); break;
                case 'ArrowLeft': this.movePlayer('left'); break;
                case 'ArrowRight': this.movePlayer('right'); break;
            }
        });
    }

    movePlayer(direction: 'up' | 'down' | 'left' | 'right') {
        this.mapService.movePlayer(direction);
    }
}