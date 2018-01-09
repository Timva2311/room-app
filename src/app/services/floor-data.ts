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
            width: "500",
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
            Xpos: "500",
            Ypos: "0",
            width: "500",
            height: "400",
            curtains: "false",
            light: "true",
            lightStrength: "25",
            music: "false",
            musicStrength: "12",
            temperature: "20",              
        },{
            id: 3,
            name: "room 3",            
            Xpos: "0",
            Ypos: "400",
            width: "1000",
            height: "500",
            curtains: "false",
            light: "true",
            lightStrength: "25",
            music: "false",
            musicStrength: "12",
            temperature: "20",              
        }] },
        {id: 1, rooms: [{
            id: 1,
            name: "room 1",
            Xpos: "0",
            Ypos: "0",
            width: "500",
            height: "500",
            curtains: "false",
            light: "true",
            lightStrength: "25",
            music: "false",
            musicStrength: "12",
            temperature: "20",            
        },{
            id: 2,
            name: "room 2",
            Xpos: "0",
            Ypos: "500",
            width: "1300",
            height: "300",
            curtains: "false",
            light: "true",
            lightStrength: "25",
            music: "false",
            musicStrength: "12",
            temperature: "20",            
        },
        {
            id: 3,
            name: "room 3",
            Xpos: "600",
            Ypos: "800",
            width: "500",
            height: "300",
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