type CleanEnergyDisplayProps = {
    dayData: {
        cleanEnergyPercentage: number;
    };
};

const CleanEnergyDisplay = ({ dayData }: CleanEnergyDisplayProps) => {
    const percentage = dayData.cleanEnergyPercentage;

    const textColorClass =
        percentage > 60 ? 'text-green-300' : percentage >= 40
                ? 'text-orange-300'
                : 'text-red-300';

    return (
        <div className="text-center mt-8">
             <span className={`${textColorClass} text-2xl font-bold text-button-bg`}>
                {percentage}%
            </span>
            <p className={"font-bold"}>Clean Energy</p>
        </div>
    );
};

export default CleanEnergyDisplay;
