import { describe, it, expect, vi } from 'vitest';
import { energyMixApi, api } from '../api';

vi.mock('axios', () => {
    return {
        default: {
            create: vi.fn(() => ({
                get: vi.fn(() => Promise.resolve({ data: {} })),
                interceptors: {
                    request: { use: vi.fn(), eject: vi.fn() },
                    response: { use: vi.fn(), eject: vi.fn() }
                }
            })),
        },
    };
});

describe('energyMixApi', () => {
    it('getOptimalWindow calls the correct endpoint with hours parameter', async () => {
        const hours = 4;
        await energyMixApi.getOptimalWindow(hours);

        expect(api.get).toHaveBeenCalledWith(`/optimal-window?hours=${hours}`);
    });

    it('getDailyMix calls the correct endpoint', async () => {
        await energyMixApi.getDailyMix();
        expect(api.get).toHaveBeenCalledWith('/energy-mix');
    });
});