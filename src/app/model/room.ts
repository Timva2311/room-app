
export class Room{
    id: number;
    name: string;
    Xpos: number;
    Ypos: number;
    width: number;
    height: number;
    temperature: number;
    curtains: boolean;
    light: boolean;
    lightStrength: number;
    music: boolean;
    musicStrength: number;
    


    constructor(id, Xpos, Ypos, width, height)
    {
        this.id = id;
        this.Xpos = Xpos;
        this.Ypos = Ypos;
        this.width = width;
        this.height = height;
    }
}