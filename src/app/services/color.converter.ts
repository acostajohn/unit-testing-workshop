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

    // hex2Rgb(color: string): RGBColor | null {

    // }

    // rgb2Hex([red, green, blue]: RGBColor): string {

    // }
}
