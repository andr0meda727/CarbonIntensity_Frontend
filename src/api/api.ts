import axios from 'axios';
import {EnergyMixResponse, OptimalWindowResponse} from '../types/types';

const BASE_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
    baseURL: `${BASE_URL}/api/carbonintensity`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const energyMixApi = {
    getDailyMix: () => api.get<EnergyMixResponse>('/energy-mix'),
    getOptimalWindow: (hours: number) => api.get<OptimalWindowResponse>(`/optimal-window?hours=${hours}`),
};