import {PieChart, Pie, Tooltip, ResponsiveContainer, Legend} from "recharts";

interface ChartData {
    name: string;
    value: number;
    fill: string;
    [key: string]: any;
}

const EnergyPieChart = ({ data }: { data: ChartData[] }) => {
    if (!data || data.length === 0) return null;

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={65}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        cornerRadius={2}
                        cy={120}
                        stroke={"none"}
                    >
                    </Pie>
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1C2E26', borderColor: '#333', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Legend
                        verticalAlign={"bottom"}
                        height={50}
                        wrapperStyle={{ fontFamily: 'inherit' }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default EnergyPieChart;