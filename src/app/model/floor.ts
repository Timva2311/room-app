import {Room} from '../model/room'

export class Floor{
    id: number;
    rooms: Array<Room>

    constructor(id, rooms)
    {
        this.id = id;
        this.rooms = rooms;
    }
}