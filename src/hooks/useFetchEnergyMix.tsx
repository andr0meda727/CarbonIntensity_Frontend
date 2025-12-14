import { useQuery } from '@tanstack/react-query';
import { energyMixApi } from "../api/api";

const useFetchEnergyMix = () => {
    return useQuery({
        queryKey: ['energyMix'],
        queryFn: async () => {
            const response = await energyMixApi.getDailyMix();
            return response.data;
        }
    });
};

export default useFetchEnergyMix;