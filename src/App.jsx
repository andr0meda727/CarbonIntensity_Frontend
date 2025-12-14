import './App.css'
import Header from "./components/Header.tsx";
import EnergyMixCard from "./components/EnergyMixCard.tsx";
import useFetchEnergyMix from "./hooks/useFetchEnergyMix.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx";
import OptimalChargingWindow from "./components/OptimalChargingWindow.tsx";

function App() {
    const {data, isLoading, isError} = useFetchEnergyMix();

    if (isLoading) return <LoadingSpinner />;
    if (isError) return <h1>Error</h1>;

    return (
        <>
            <Header/>

            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col gap-1 mt-8">
                    <h2 className={"text-4xl text-white text-center font-bold"}>Energy mix forecast</h2>
                    <h3 className={"text-gray-400 text-center tracking-widest"}>Reduce your carbon footprint.</h3>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-16">
                    {data?.energyMixDays.map((day) => (
                        <EnergyMixCard key={day.date} dayData={day} />
                    ))}
                </div>

                <OptimalChargingWindow />
            </div>
        </>
    )
}

export default App
