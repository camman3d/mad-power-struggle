
export type LightChannel = 'red' | 'green' | 'blue' | number;

export interface LightDefinition {
  name: string,
  channels: LightChannel[],
}

type LightObj = {
    name: string,
    defName: string,
    address: number,
}

export class Light {

    static instantiate(lights: LightObj[], definitions: LightDefinition[]): Light[] {
        return lights.map(light => {
            let definition = definitions.find(def => def.name === light.defName)!;
            return new Light(light.name, definition, light.address);
        });
    }

    constructor(public name: string, public definition: LightDefinition, public address: number) {}

    private hexToRgb(hex: string): {r: number, g: number, b: number} {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {r: 0, g: 0, b: 0};
    }

    getValues(color: string): number[] {
        let rgb = this.hexToRgb(color);
        return this.definition.channels.map(channel => {
            if (channel == 'red') return rgb.r;
            if (channel == 'green') return rgb.g;
            if (channel == 'blue') return rgb.b;
            return channel;
        })
    }

    toObj(): LightObj {
        return {
            name: this.name,
            defName: this.definition.name,
            address: this.address
        };
    }

}