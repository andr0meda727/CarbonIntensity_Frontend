import axios from 'axios';
import {EnergyMixResponse, OptimalWindowResponse} from '../types/types';

export const api = axios.create({
    baseURL: 'https://localhost:44302/api/CarbonIntensity',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const energyMixApi = {
    getDailyMix: () => api.get<EnergyMixResponse>('/energy-mix'),
    getOptimalWindow: (hours: number) => api.get<OptimalWindowResponse>(`/optimal-window?hours=${hours}`),
};