import { Injectable } from "@angular/core";
import { ColorAPI } from "./color-api.service";

export type RGBColor = [number, number, number];

/**
 * 1. Validate the happy paths
 * 2. Validate the invalid and incomplete cases
 */
@Injectable({
    providedIn: 'root',
})
export class ColorConverter {

    hex2Rgb(color: string): RGBColor | null {
        if (color.length !== 6) {
            return null;
        }

        // const rgb = [
        //     parseInt(color.substring(0, 2), 16),
        //     parseInt(color.substring(2, 4), 16),
        //     parseInt(color.substring(4, 6), 16),
        // ] as RGBColor;
        const rgb = color.match(/.{2}/g).map(srt => parseInt(srt, 16)) as RGBColor;

        return this.isValidRgb(rgb) ? rgb : null;
    }

    getColorInfo(color: string | RGBColor): ReturnType<typeof ColorAPI.fetchInfo> {
        const value = typeof color === 'string' ? color : color.join(',');
        const type = typeof color === 'string' ? 'hex' : 'rgb';
        return ColorAPI.fetchInfo(value, type);
    }

    // rgb2Hex([red, green, blue]: RGBColor): string {

    // }

    private isValidRgb(rbg: any[]): boolean {
        return !rbg.some(isNaN);
    }
}
