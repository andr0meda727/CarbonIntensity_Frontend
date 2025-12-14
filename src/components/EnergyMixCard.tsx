import EnergyPieChart from "./EnergyPieChart";
import CleanEnergyDisplay from "./CleanEnergyDisplay.tsx";
import { energyMixDay } from "../types/types.ts";

const SOURCE_COLORS: Record<string, string> = {
    biomass: "#8D6E63",
    coal: "#20262c",
    imports: "#768e9c",
    gas: "#FF9800",
    nuclear: "#0f5902",
    hydro: "#2196F3",
    solar: "#FFD700",
    wind: "#13EC92",
    other: "#9E9E9E"
};

const EnergyMixCard = ({ dayData }: { dayData: energyMixDay }) => {
    const chartData = Object.entries(dayData.averageEnergyMix)
        .map(([energyType, percentageShare]) => ({
            name: energyType,
            value: percentageShare,
            fill: SOURCE_COLORS[energyType] || "#cccccc" // fallback
        }))
        .filter(item => item.value > 0);


    return (
        <div className="bg-energyCard rounded-xl shadow-lg w-80 lg:w-full text-white border-2 border-buttonBg/10 flex flex-col p-4">
            <h3 className="text-2xl font-bold text-center -mb-4">
                {new Date(dayData.date).toLocaleDateString('en-GB', { timeZone: "UTC" })}
            </h3>
            <EnergyPieChart data={chartData} />
            <CleanEnergyDisplay dayData={dayData} />
        </div>
    );
};

export default EnergyMixCard;