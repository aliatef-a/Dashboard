import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", books: 10 },
  { month: "Feb", books: 20 },
  { month: "Mar", books: 15 },
  { month: "Apr", books: 25 },
  { month: "May", books: 30 },
  { month: "Jun", books: 18 },
  { month: "Jul", books: 22 },
  { month: "Aug", books: 28 },
  { month: "Sep", books: 35 },
  { month: "Oct", books: 40 },
  { month: "Nov", books: 38 },
  { month: "Dec", books: 50 },
];

const BooksAreaChart = () => {
  return (
    <div className="w-full h-72 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 10, right: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#0D224A", fontWeight: "bold" }}
          />
          <YAxis tick={{ fill: "#0D224A", fontWeight: "bold" }} />
          <Tooltip cursor={{ fill: "transparent" }} />

          {/* Gradient Fill */}
          <defs>
            <linearGradient id="colorBooks" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2C73F8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#2C73F8" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Area Chart */}
          <Area
            type="monotone"
            dataKey="books"
            stroke="#2C73F8"
            fillOpacity={1}
            fill="url(#colorBooks)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BooksAreaChart;
