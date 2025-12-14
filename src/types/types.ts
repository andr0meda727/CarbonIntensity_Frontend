export interface energyMixDay {
    date: string;
    averageEnergyMix: Record<string, number>;
    cleanEnergyPercentage: number;
}

export interface EnergyMixResponse {
    energyMixDays: energyMixDay[];
}

export interface OptimalWindowResponse {
    startTime: string;
    endTime: string;
    cleanEnergyPercentage: number;
}