import axios from 'axios';
import { EnergyMixResponse } from '../types/types';

export const api = axios.create({
    baseURL: 'https://localhost:44302/api/CarbonIntensity',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const energyMixApi = {
    getDailyMix: () => api.get<EnergyMixResponse>('/energy-mix'),
};