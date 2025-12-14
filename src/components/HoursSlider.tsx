import Slider from '@mui/material/Slider';

interface Props {
    hours: number;
    setHours: (hours: number) => void;
}

const HoursSlider = ({ hours, setHours }: Props) => {
    const marks = [
        { value: 1, label: '1h' },
        { value: 6, label: '6h' },
    ];

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-2 px-1">
                <span className={"text-neutral-400 text-sm"}>Duration</span>
                <span className={"font-semibold text-buttonBg"}>{hours}h</span>
            </div>

            <Slider
                aria-label="Choose charging time"
                value={hours}
                onChange={(_, newValue) => setHours(newValue as number)}
                min={1}
                max={6}
                step={1}
                marks={marks}
                sx={{
                    height: 8,
                    color: '#13EC92',
                    marginX: "8px",

                    '& .MuiSlider-markLabel': {
                        color: '#ffffff',
                    },
                    '& .MuiSlider-rail': {
                        color: '#2C3E36',
                        opacity: 1,
                    }
                }}
            />
        </div>
    );
};

export default HoursSlider;
