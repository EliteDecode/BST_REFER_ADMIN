import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

type AreaChartCompProps = {
  data: {
    name: string;
    totalReferrals: number;
    matchedReferrals: number;
    conversionRate: number;
    uniqueReferrersCount: number;
  }[];
  stroke: string;
  fill: string;
};

const AreaChartComp = ({ data, stroke, fill }: AreaChartCompProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="totalReferrals"
          fill={fill}
          stroke={stroke}
        />
        <Bar dataKey="matchedReferrals" barSize={20} fill={fill} />
        <Line type="monotone" dataKey="conversionRate" stroke={stroke} />
        <Scatter dataKey="uniqueReferrersCount" fill="#000066" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComp;
