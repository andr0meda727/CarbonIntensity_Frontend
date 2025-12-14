import { useState } from "react";
import HoursSlider from "./HoursSlider.tsx";
import useFetchOptimalWindow from "../hooks/useFetchOptimalWindow.tsx";
import LoadingSpinner from "./LoadingSpinner.tsx";
import OptimalWindowResult from "./OptimalWindowResult.tsx";


const OptimalChargingWindow = () => {
    const [hours, setHours] = useState<number>(1);
    const { data, isLoading, isError, refetch } = useFetchOptimalWindow(hours);

    return (
        <div className="bg-energyCard rounded-xl my-8 shadow-lg border-2 border-buttonBg/10">
            <div className="py-6 px-4 flex justify-between items-center mx-4">
                <div>
                <h3 className="text-white text-xl font-bold mb-2">Enter charging time</h3>
                    <div>
                        <HoursSlider hours={hours} setHours={setHours} />

                        <button
                            onClick={() => refetch()}
                            disabled={isLoading}
                            className="bg-buttonBg hover:bg-buttonBg/90 transition text-black font-bold py-2 px-4 rounded-xl mt-2 -ml-0.5"
                        >
                            {isLoading ? <LoadingSpinner /> : 'Find optimal window'}
                        </button>
                    </div>
                </div>

                {isError && (
                    <div className="mt-6 text-red-400 bg-red-900/20 p-4 rounded-lg border border-red-500/50 text-sm">
                        Failed to calculate window. Try again later.
                    </div>
                )}

                <div>
                    {data && !isLoading && !isError && (
                        <OptimalWindowResult
                            startTime={data.startTime}
                            endTime={data.endTime}
                            cleanEnergyPercentage={data.cleanEnergyPercentage}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default OptimalChargingWindow;