import { useState } from "react";
import HoursSlider from "./HoursSlider.tsx";
import useFetchOptimalWindow from "../hooks/useFetchOptimalWindow.tsx";
import OptimalWindowResult from "./OptimalWindowResult.tsx";

const OptimalChargingWindow = () => {
    const [hours, setHours] = useState<number>(1);
    const { data, isLoading, isError, refetch } = useFetchOptimalWindow(hours);

    return (
        <div className="bg-energyCard rounded-xl my-8 shadow-lg border-2 border-buttonBg/10 mx-4 lg:mx-0">
            <div className="py-6 px-4 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">

                <div className="w-full lg:w-1/2">
                    <h3 className="text-white text-xl font-bold mb-4 text-center lg:text-left">
                        Enter charging time
                    </h3>

                    <div>
                        <div className="w-full">
                            <HoursSlider hours={hours} setHours={setHours} />
                        </div>

                        <button
                            onClick={() => refetch()}
                            disabled={isLoading}
                            className="bg-buttonBg hover:bg-buttonBg/90 transition text-black font-bold py-3 px-6 rounded-xl mt-6 w-full lg:w-auto lg:-ml-0.5"
                        >
                            {isLoading ? 'Calculating...' : 'Find optimal window'}
                        </button>
                    </div>

                    {isError && (
                        <div className="mt-6 text-red-400 bg-red-900/20 p-4 rounded-lg border border-red-500/50 text-sm">
                            Failed to calculate window. Try again later.
                        </div>
                    )}
                </div>

                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    {data && !isLoading && !isError && (
                        <div className="w-full lg:w-auto">
                            <OptimalWindowResult
                                startTime={data.startTime}
                                endTime={data.endTime}
                                cleanEnergyPercentage={data.cleanEnergyPercentage}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OptimalChargingWindow;