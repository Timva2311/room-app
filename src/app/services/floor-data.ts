import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Room } from '../model/room';
import { Floor } from '../model/floor';

export class FloorData implements InMemoryDbService{
   createDb()
   {
    let floors = [
        {id: 0, rooms: [{
            id: 1,
            name: "room 1",
            Xpos: "0",
            Ypos: "0",
            width: "400",
            height: "400",
            curtains: "false",
            light: "true",
            lightStrength: "25",
            music: "false",
            musicStrength: "12",
            temperature: "20",            
        },{
            id: 2,
            name: "room 2",            
            Xpos: "400",
            Ypos: "0",
            width: "400",
            height: "400",
            curtains: "false",
            light: "true",
            lightStrength: "25",
            music: "false",
            musicStrength: "12",
            temperature: "20",              
        }] }
    ]
    return {floors}
   }
}