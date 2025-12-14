import { OptimalWindowResponse } from "../types/types.ts";

const OptimalWindowResult = ({ startTime, endTime, cleanEnergyPercentage }: OptimalWindowResponse) => {
    const duration = (new Date(endTime).getTime() - new Date(startTime).getTime()) / (1000 * 60 * 60);

    return (
        <div className="fade-in-up w-full lg:w-auto lg:mr-8">

            <div className="flex justify-between items-center mb-6">
                <h3 className="text-white text-xl flex items-center">
                    <ClockIcon />
                    Charging time
                </h3>
                <span className="bg-neutral-800 text-buttonBg px-4 py-1 rounded text-m font-bold border border-buttonBg/50">
                    {Math.round(duration)}h
                </span>
            </div>

            <div className="text-neutral-500 text-sm font-bold uppercase mb-4 tracking-wider">
                RECOMMENDATION
            </div>

            <div className="flex items-center justify-between sm:justify-start">

                {/* START BLOCK */}
                <div className="flex flex-col">
                    <span className="text-neutral-400 uppercase text-xs mb-1">Start</span>
                    <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-baseline">
                        <span className="text-buttonBg font-bold text-sm">{formatDate(startTime)}</span>
                        <span className="text-2xl font-bold text-white">{formatTime(startTime)}</span>
                    </div>
                </div>

                <div className="mx-2 sm:mx-4">
                    <ArrowRightIcon />
                </div>

                <div className="flex flex-col text-right sm:text-left">
                    <span className="text-neutral-400 uppercase text-xs mb-1">End</span>
                    <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-baseline">
                        <span className="text-buttonBg font-bold text-sm">{formatDate(endTime)}</span>
                        <span className="text-2xl font-bold text-white">{formatTime(endTime)}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-0.5 justify-center mt-4 pt-4 border-t border-white/5">
                <p className={"text-white font-bold text-xl"}>Clean energy:</p>
                <p className={"text-green-600 font-bold text-lg"}>{cleanEnergyPercentage}%</p>
            </div>
        </div>
    )
}

const formatDate = (isoString: string) => new Date(isoString).toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' });
const formatTime = (isoString: string) => new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const ClockIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-buttonBg inline-block mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-neutral-500 mx-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
)

export default OptimalWindowResult;