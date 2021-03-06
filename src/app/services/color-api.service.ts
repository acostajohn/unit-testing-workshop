export const SERVICE_URL = 'https://www.thecolorapi.com';

export type ColorFormat = 'rgb' | 'hex';

export interface ColorAPIResponse {
    hex: {
        value: string;
    },
    rgb: {
        r: number;
        g: number;
        b: number;
        value: string; // rgb(0, 0, 0),
    }
}

export class ColorAPI {
    static fetchInfo(color: string, format: ColorFormat): Promise<ColorAPIResponse> {
        return fetch(`${SERVICE_URL}/id?${format}=${color}`).then(res => res.json());
    }
}
