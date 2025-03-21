import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { CustomBarProps } from "../../types/types";

const data = [
    { name: "الكتب المؤرشفة", value: 150, color: "#AB9410" },
    { name: "الكتب الواردة", value: 80, color: "#12991B" },
    { name: "الكتب الصادرة", value: 120, color: "#2C73F8" },
];

// Custom bar shape component
const CustomBar = ({ x = 0, y = 0, width = 0, height = 0, payload }: CustomBarProps) => {
    const barColor = payload ? data.find(d => d.name === payload.name)?.color || "#000" : "#000";
    return <rect x={x} y={y} width={width} height={height} fill={barColor} rx={0} ry={0} />;
};

const BooksChart = () => {
    const [barSize, setBarSize] = useState(40); // Default small size

    useEffect(() => {
        // Adjust barSize based on window width
        const updateBarSize = () => {
            if (window.innerWidth >= 1024) {
                setBarSize(120); // Large screens (lg+)
            } else {
                setBarSize(50); // Medium screens
            }
        };

        updateBarSize(); // Initial check
        window.addEventListener("resize", updateBarSize);
        return () => window.removeEventListener("resize", updateBarSize);
    }, []);

    return (
        <div className="w-full h-72 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ left: 10, right: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />

                    {/* Custom X-Axis Labels with Responsive Font & Wrapping */}
                    <XAxis
                        dataKey="name"
                        tick={({ x, y, payload }) => (
                            <text
                                x={x}
                                y={y + 20}
                                textAnchor="middle"
                                fill="#0D224A"
                                fontWeight="bold"
                                className="text-xs sm:text-sm md:text-base"
                                style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                            >
                                {payload.value}
                            </text>
                        )}
                    />

                    <YAxis tickMargin={40} />
                    <Tooltip cursor={{ fill: "transparent" }} />

                    {/* Bar with Dynamic Size */}
                    <Bar dataKey="value" barSize={barSize} radius={[5, 5, 0, 0]} shape={CustomBar} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BooksChart;
