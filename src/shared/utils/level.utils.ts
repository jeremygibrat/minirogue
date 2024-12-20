import { pickRoom, pickExit } from "./picker.utils";

function createRooms(nbPlayers: number, levelType: string, floor: number): any[] {
    return [
        pickRoom(nbPlayers, floor),
        pickRoom(nbPlayers, floor),
        pickRoom(nbPlayers, floor),
        pickExit(levelType),
    ];
}

export function createMapFloors(nbPlayers: number) {
    const levels = [];
    for (let i = 0; i < 4; i++) {
        let rooms = []
        rooms.push(createMapRooms(nbPlayers, 'Exploration', i));
        if (i > 1) {
            rooms.push(createMapRooms(nbPlayers, 'Exploration', i));
        }
        if (i === 3) {
            rooms.push(createMapRooms(nbPlayers, 'Boss', i));
        } else {
            rooms.push(createMapRooms(nbPlayers, 'Guardian', i));
        }
        levels.push({ label: 'Floor ' + i, rooms: rooms })
    }

    return levels;
}

function createMapRooms(nbPlayers: number, levelType: string, floor: number) {
    let rooms = [
        [pickRoom(nbPlayers, floor), pickRoom(nbPlayers, floor), pickRoom(nbPlayers, floor)],
        [pickRoom(nbPlayers, floor), pickRoom(nbPlayers, floor), pickRoom(nbPlayers, floor)],
        [pickRoom(nbPlayers, floor), pickRoom(nbPlayers, floor), pickExit(levelType)]
    ]
    return rooms;
}