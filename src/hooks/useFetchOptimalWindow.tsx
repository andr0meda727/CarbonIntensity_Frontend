import { energyMixApi} from "../api/api.ts";
import { useQuery } from '@tanstack/react-query';

const useFetchOptimalWindow = (hours: number) => {
    return useQuery({
        queryKey: ['optimalWindow', hours],
        queryFn: async () => {
            const response = await energyMixApi.getOptimalWindow(hours);
            return response.data;
        },
        enabled: false,
        retry: false
    });
}

export default useFetchOptimalWindow;