import { ColorConverter } from "./color.converter";
import { ColorAPI } from "../services/color-api.service";

/**
 * Setup for the converter
 * const converter = new ColorConverter();
*/

describe('ColorConverter', () => {
    describe('hex2Rgb', () => {
        it('converts hex to rgb', () => {
            const converter = new ColorConverter();

            expect(converter.hex2Rgb('ffffff')).toEqual([255, 255, 255]);
            expect(converter.hex2Rgb('000000')).toEqual([0, 0, 0]);
        });

        it('return null if an incomplete hex', () => {
            const converter = new ColorConverter();
            expect(converter.hex2Rgb('fffd')).toBeNull();
        });

        it('return null if an invalid hex is passed', () => {
            const converter = new ColorConverter();
            expect(converter.hex2Rgb('ffrrmm')).toBeNull();
        });
    });

    describe('rgb2Hex', () => {
        it('ok', () => {});
    });

    describe('for a hex color', () => {
        const response = {
            hex: {
                value: '#0047AB',
            },
            rgb: {
                r: 0,
                g: 71,
                b: 171,
                value: 'rgb(0, 71, 171)',
            },
        };

        beforeEach(() => {
            jest.spyOn(ColorAPI, 'fetchInfo').mockResolvedValueOnce(response);
        });

        it('fetches information from color api service', async () => {
            const converter = new ColorConverter();
            await converter.getColorInfo('00ff03');

            expect(ColorAPI.fetchInfo).toHaveBeenCalledTimes(1);
            expect(ColorAPI.fetchInfo).toHaveBeenCalledWith('00ff03', 'hex');
        });
    });
});
