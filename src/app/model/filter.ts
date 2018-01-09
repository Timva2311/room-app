
export class Filter{
    temperature: boolean;
    light: boolean;
    curtains: boolean;
    music: boolean;
    name: boolean;

    constructor()
    {
        this.temperature = true;
        this.light = true;
        this.curtains = true;
        this.music = true;
        this.name = true;
    }
}