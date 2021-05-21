import { ColorAPI } from './color-api.service';
import { FetchMock } from 'jest-fetch-mock';

describe('ColorAPI', () => {
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
        (<FetchMock>fetch).resetMocks();
        (<FetchMock>fetch).mockResponseOnce(JSON.stringify(response));
    });

    it('ok', () => {});
});
